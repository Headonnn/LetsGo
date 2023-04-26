import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Recommandation from "./components/Recommandation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./components/Card";
// import MultiRangeSlider from "multi-range-slider-react";
// import TarifGratuit from "./components/TarifGratuit";
// import Categ from "./components/Categ";
// import Dept from "./components/Dept";
// import FiltreDate from "./components/FiltreDate";
/* import _index from "./Styles/_index.scss"; */

function App() {
  const [dept, setDpt] = useState("All");
  const [categ, setCateg] = useState("All");
  const [api, setApi] = useState(undefined);
  const [free, setFree] = useState("Payant et gratuit");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(300);
  const [calend, setCalend] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  useEffect(() => {
    axios
      .get(
        "https://data.paysdelaloire.fr/api/records/1.0/search/?dataset=234400034_070-002_offre-touristique-fetes_et_manifestations-rpdl&q=&rows=1779&facet=categorie&facet=commune&facet=periodicite&facet=tarifgratuit&facet=resaenligneouinon&facet=departement%22"
      )
      .then((response) => {
        setApi(response.data.records);
        console.warn(response.data.records);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  function handleString(str) {
    if (str !== undefined) {
      if (str.match(/\|(\d+,\d+?)\|/g) === null) {
        if (str.indexOf("€") !== -1) {
          if (str.match(/(\d+?)€/g) === null) {
            return str.match(/(\d+?) €/g);
          }
          return str.match(/(\d+?)€/g);
        }
        return [0];
      }
      return str
        .match(/\|(\d+,\d+?)\|/g)
        .join("")
        .replace(/\|/g, "")
        .replace(/,/g, ".")
        .trim()
        .split(" ")
        .map((e) => Number(e));
    }
    return [0];
  }
  const handleDate = (str) => {
    let dates = [];
    dates = str
      .match(/(\d+\/\d+\/\d+)\|\|/g, "")
      .map((e) => e.replace(/\|/g, ""));

    dates = dates.map((e) => {
      const tab = e.split("");
      tab.splice(6, 0, tab[0]);
      tab.splice(7, 0, tab[1]);
      tab.splice(8, 0, tab[2]);
      tab.shift();
      tab.shift();
      tab.shift();
      return tab.join("");
    });

    dates = dates.map((e) => new Date(e));
    return dates;
  };

  return (
    <div className="App">
      <Header />
      <Nav />
      <Categories />
      <Recommandation />
      <Contact />
      <Home />
      <div className="containerSidebarCards">
        <Sidebar
          setDpt={setDpt}
          free={setFree}
          setFree={setFree}
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          api={api}
          categ={setCateg}
          calend={calend}
          setCalend={setCalend}
        />

        {api &&
          api
            .filter((e) => {
              return (
                handleDate(e.fields.ouverturegranule).filter((el) => {
                  return el <= calend[0].endDate && el >= calend[0].startDate;
                }).length !== 0
              );
            })
            .filter((e) => {
              return (
                minValue <= Math.min(...handleString(e.fields.tarifs)) &&
                maxValue >= Math.max(...handleString(e.fields.tarifs))
              );
            })
            .filter((e) => {
              if (dept === "All") {
                return e;
              }
              return dept === "Sans Département"
                ? e.fields.departement === undefined
                : e.fields.departement === dept;
            })
            .filter((e) => {
              if (categ === "All") {
                return e;
              }
              return categ === "Sans categorie"
                ? e.fields.categorie === undefined
                : e.fields.categorie === categ;
            })
            .filter((e) => {
              if (free === "Payant") {
                return e.fields.tarifgratuit === "non";
              }
              if (free === "Gratuit") {
                return e.fields.tarifgratuit === "oui";
              }
              return e;
            })
            .map((e) => {
              return (
                <Card
                  event={e.fields.nomoffre}
                  category={e.fields.categorie}
                  adress={e.fields.adresse2}
                  departement={e.fields.departement}
                  price={e.fields.tarifgratuit}
                  eventPrice={e.fields.tarifs}
                  payment={e.fields.modepaiement}
                  date={e.fields.ouverturegranule}
                />
              );
            })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

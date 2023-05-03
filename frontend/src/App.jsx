import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Navigation from "./components/Menu_accueil/MenuAccueil";
import Categories from "./components/Categories";
import Recommandation from "./components/Recommandation";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./components/Card";


// import FavorisFilter from "./components/FavorisFilter";

/* import _index from "./Styles/_index.scss"; */
function App() {
  const [favorites, setFavorites] = useState([]);
  const [favoritesFilter, setFavoritesFilter] = useState(false);
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
  const [dateEvMin, setDateEvMin] = useState(new Date("01/01/2023").toString());
  const [dateEvMax, setDateEvMax] = useState(new Date("12/31/2023").toString());
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
      <Navigation />
      <Categories />
      <Recommandation />
      <Contact />
      <Home />
      <Sidebar
        setDpt={setDpt}
        categ={categ}
        free={free}
        setFree={setFree}
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        api={api}
        setCateg={setCateg}
        calend={calend}
        setCalend={setCalend}
        dateEvMin={dateEvMin}
        setDateEvMin={setDateEvMin}
        dateEvMax={dateEvMax}
        setDateEvMax={setDateEvMax}
        favoritesFilter={favoritesFilter}
        setFavoritesFilter={setFavoritesFilter}
      />
      {api &&
        api
          .filter((e) => {
            return (
              handleDate(e.fields.ouverturegranule).filter((el) => {
                return el <= new Date(dateEvMax) && el >= new Date(dateEvMin);
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
          .filter((e) => {
            if (favoritesFilter === true) {
              return favorites.includes(e.recordid);
            }

            return e;
          })
          .map((e) => {
            return (
              <Card
                id={e.recordid}
                event={e.fields.nomoffre}
                category={e.fields.categorie}
                adress={e.fields.adresse2}
                departement={e.fields.departement}
                price={e.fields.tarifgratuit}
                eventPrice={e.fields.tarifs}
                date={e.fields.ouverturegranule}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            );
          })}
      ;
    </div>
  );
}

export default App;

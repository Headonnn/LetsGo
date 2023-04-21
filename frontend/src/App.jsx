import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import MultiRangeSlider from "multi-range-slider-react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Nouveautes from "./components/Nouveautes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./components/Card";
import TarifGratuit from "./components/TarifGratuit";
import Categ from "./components/Categ";
import Dept from "./components/Dept";

function App() {
  const [dept, setDpt] = useState("All");
  const [categ, setCateg] = useState("All");
  const [api, setApi] = useState(undefined);
  const [free, setFree] = useState("Payant et gratuit");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(300);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };
  useEffect(() => {
    axios
      .get(
        "https://data.paysdelaloire.fr/api/records/1.0/search/?dataset=234400034_070-002_offre-touristique-fetes_et_manifestations-rpdl&q=&rows=1779&facet=categorie&facet=commune&facet=periodicite&facet=tarifgratuit&facet=resaenligneouinon&facet=departement%22"
      )
      .then((response) => {
        setApi(response.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  function handleString(str) {
    if (str !== undefined) {
      if (str.match(/\|(\d+,\d+?)\|/g) == null) {
        if (str.indexOf("€") !== -1) {
          if (str.match(/(\d+?)€/g) == null) {
            return str.match(/(\d+?) €/g);
          }
          return str.match(/(\d+?)€/g);
        }
        return [0];
      }
      return str
        .match(/\|(\d+,\d+?)\|/g)
        .join("")
        .replace(/\|/g, " ")
        .replace(/,/g, ".")
        .trim()
        .split("  ")
        .map((e) => Number(e));
    }
    return [0];
  }

  return (
    <div className="App">
      <Header />
      <Nav />
      <Categories />
      <Nouveautes />
      <Contact />
      <Footer />
      <Home />
      <p>Coucou</p>
      <div>
        Valeurs : ({minValue} ; {maxValue})
      </div>
      <MultiRangeSlider
        min={0}
        max={300}
        step={5}
        label
        ruler={false}
        style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
        minValue={minValue}
        maxValue={maxValue}
        barInnerColor="#153462"
        onInput={(e) => {
          handleInput(e);
        }}
      />

      <TarifGratuit setFree={setFree} />
      {/*  condition de filtre gratuit ou payant */}
      {api && <Categ donnees={api} setCateg={setCateg} />}
      {api && <Dept donnees={api} setDpt={setDpt} />}
      {}

      {api &&
        api.records
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
  );
}

export default App;

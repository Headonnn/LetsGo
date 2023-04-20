import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import MultiRangeSlider from "multi-range-slider-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Nouveautes from "./components/Nouveautes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Card from "./components/Card";
import TarifGratuit from "./components/TarifGratuit";
/* import _index from "./Styles/_index.scss"; */

function App() {
  const [api, setApi] = useState(undefined);
  const [free, setFree] = useState("Payant et gratuit");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

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

  /* function handleString (str) {console.log(str);return (str != undefined  )   ?  str.match(/\|(\d+,\d+?)\|/g).join('').replace(/\|/g," ").replace(/,/g,".").trim().split("  ").map(e=>Number(e)) : [] } */

  return (
    <div className="App">
      <Header />
      <Nav />
      <Categories />
      <Nouveautes />
      <Contact />
      <Footer />
      <Home />
      <Sidebar />
      <p>coucou</p>

      <MultiRangeSlider
        minValue={minValue}
        set_minValue={setMinValue}
        maxValue={maxValue}
        set_maxValue={setMaxValue}
      />

      <TarifGratuit setFree={setFree} />
      {/*  condition de filtre gratuit ou payant */}

      {api &&
        api.records /* .filter((e) => {
          return minValue < Math.min(...handleString(e.fields.tarifs)) && maxValue > Math.max(...handleString(e.fields.tarifs))
        }) */
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

import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import Accueil from "./pages/Accueil";
import Evenements from "./pages/Evenements";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [favoritesFilter, setFavoritesFilter] = useState(false);
  const [dept, setDept] = useState("All");
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

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Accueil
              api={api}
              setCateg={setCateg}
              setDept={setDept}
              calend={calend}
              setCalend={setCalend}
              setDateEvMin={setDateEvMin}
              setDateEvMax={setDateEvMax}
            />
          }
        />

        <Route
          path="/Evenements"
          element={
            <Evenements
              dateEvMin={dateEvMin}
              setDateEvMin={setDateEvMin}
              dateEvMax={dateEvMax}
              setDateEvMax={setDateEvMax}
              favoritesFilter={favoritesFilter}
              setFavoritesFilter={setFavoritesFilter}
              favorites={favorites}
              setFavorites={setFavorites}
              api={api}
              dept={dept}
              setDept={setDept}
              free={free}
              setFree={setFree}
              minValue={minValue}
              setMinValue={setMinValue}
              maxValue={maxValue}
              setMaxValue={setMaxValue}
              categ={categ}
              setCateg={setCateg}
              calend={calend}
              setCalend={setCalend}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

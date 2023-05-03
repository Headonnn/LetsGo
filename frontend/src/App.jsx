import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import CarouselCategories from "./components/CarouselCategories";
// import Recommandation from "./components/Recommandation";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// import Card from "./components/Card";
// import MultiRangeSlider from "multi-range-slider-react";
// import TarifGratuit from "./components/TarifGratuit";
// import Categ from "./components/Categ";
// import Dept from "./components/Dept";
// import FiltreDate from "./components/FiltreDate";

function App() {
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
        <Route path="/" element={<Page1 api={api} categ={setCateg} />} />
        <Route
          path="/page2"
          element={
            <Page2
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

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../index.scss";
import Header from "../components/Header";
import Navigation from "../components/Menu_accueil/MenuAccueil";
import CarouselCategories from "../components/CarouselCategories";
import Recommandation from "../components/Recommandation";
import Footer from "../components/Footer";

// import Card from "./components/Card";
// import MultiRangeSlider from "multi-range-slider-react";
// import TarifGratuit from "./components/TarifGratuit";
// import Categ from "./components/Categ";
// import Dept from "./components/Dept";
// import FiltreDate from "./components/FiltreDate";
/* import _index from "./Styles/_index.scss"; */

function Accueil({
  api,
  dept,
  setDept,
  categ,
  setCateg,
  setDateEvMin,
  setDateEvMax,
  setFree,
  setFavoritesFilter,
}) {
  useEffect(() => {
    setCateg("All");
    setDept("All");
    setDateEvMin(new Date("01/01/2023").toString());
    setDateEvMax(new Date("12/31/2023").toString());
    setFree("Payant et Gratuit");
    setFavoritesFilter(false);
  }, []);
  return (
    <div className="Accueil">
      <Header />
      <Navigation
        donnees={api}
        setCateg={setCateg}
        setDept={setDept}
        setDateEvMin={setDateEvMin}
        setDateEvMax={setDateEvMax}
      />
      <CarouselCategories
        dept={dept}
        setDept={setDept}
        categ={categ}
        setCateg={setCateg}
      />
      <Recommandation
        // dept={dept}
        // setDept={setDept}
        // categ={categ}
        setCateg={setCateg}
      />
      <Footer />
    </div>
  );
}

export default Accueil;

Accueil.propTypes = {
  dept: PropTypes.string.isRequired,
  setDept: PropTypes.string.isRequired,
  setDateEvMin: PropTypes.string.isRequired,
  setDateEvMax: PropTypes.string.isRequired,
  categ: PropTypes.string.isRequired,
  setCateg: PropTypes.string.isRequired,
  api: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setFree: PropTypes.string.isRequired,
  setFavoritesFilter: PropTypes.string.isRequired,
};

import React from "react";
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

function Page1({
  api,
  dept,
  setDept,
  categ,
  setCateg,
  setDateEvMin,
  setDateEvMax,
}) {
  return (
    <div className="Page1">
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
      <Recommandation />
      <Footer />
    </div>
  );
}

export default Page1;

Page1.propTypes = {
  dept: PropTypes.string.isRequired,
  setDept: PropTypes.string.isRequired,
  setDateEvMin: PropTypes.string.isRequired,
  setDateEvMax: PropTypes.string.isRequired,
  categ: PropTypes.string.isRequired,
  setCateg: PropTypes.string.isRequired,
  api: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
};

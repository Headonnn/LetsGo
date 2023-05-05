import React, { useState } from "react";
import PropTypes from "prop-types";
import Categories from "./Categories";
import Dates from "./Dates";
import Localisation from "./Localisation";
import "../../style/_navigation.scss";
import BiCat from "../../assets/images/category.png";
import BiDate from "../../assets/images/date.png";
import BiLoc from "../../assets/images/localisation.png";

function Navigation({
  donnees,
  setCateg,
  setDept,
  setDateEvMin,
  setDateEvMax,
}) {
  const [showCategories, setShowCategories] = useState(false);
  const [showCategories1, setShowCategories1] = useState(false);
  const [showCategories2, setShowCategories2] = useState(false);

  function handleClick() {
    setShowCategories(true);
    setShowCategories1(false);
    setShowCategories2(false);
  }
  function handleClick1() {
    setShowCategories1(true);
    setShowCategories(false);
    setShowCategories2(false);
  }
  function handleClick2() {
    setShowCategories2(true);
    setShowCategories1(false);
    setShowCategories(false);
  }

  return (
    <>
      <nav className="navigation">
        <ul className="ul-nav">
          <li
            className="nav-li"
            onClick={handleClick}
            onKeyDown={handleClick}
            role="presentation"
          >
            <a className="a-nav" href="#Categories">
              {" "}
              <img src={BiCat} className="nav-icon" alt="Categories" />
              Catégories
            </a>
          </li>
          <li
            className="nav-li"
            onClick={handleClick1}
            onKeyDown={handleClick1}
            role="presentation"
          >
            <a className="a-nav" href="#Dates">
              <img src={BiDate} className="nav-icon" alt="Dates" />
              Dates
            </a>
          </li>
          <li
            className="nav-li"
            onClick={handleClick2}
            onKeyDown={handleClick2}
            role="presentation"
          >
            <a className="a-nav" href="#Localisation">
              <img src={BiLoc} className="nav-icon" alt="Localisation" />
              Lieux
            </a>
          </li>
        </ul>
      </nav>
      {showCategories && <Categories donnees={donnees} setCateg={setCateg} />}
      {showCategories1 && (
        <Dates
          donnees={donnees}
          setDateEvMin={setDateEvMin}
          setDateEvMax={setDateEvMax}
        />
      )}
      {showCategories2 && <Localisation donnees={donnees} setDept={setDept} />}
    </>
  );
}

export default Navigation;

Navigation.propTypes = {
  donnees: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setDateEvMin: PropTypes.string.isRequired,
  setDateEvMax: PropTypes.string.isRequired,
  setDept: PropTypes.string.isRequired,
  setCateg: PropTypes.string.isRequired,
};

import React, { useState } from "react";
import Categories from "./Categories";
import Dates from "./Dates";
import Localisation from "./Localisation";
import "../../style/_navigation.scss";
import BiCat from "../../assets/images/category.png";
import BiDate from "../../assets/images/date.png";
import BiLoc from "../../assets/images/localisation.png";

function Navigation() {
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
        <ul>
          <li onClick={handleClick} onKeyDown={handleClick} role="presentation">
            <a href="#Categories">
              {" "}
              <img src={BiCat} className="icon" alt="Categories" />
              Catégories
            </a>
          </li>
          <li
            onClick={handleClick1}
            onKeyDown={handleClick1}
            role="presentation"
          >
            <a href="#Dates">
              <img src={BiDate} className="icon" alt="Dates" />
              Dates
            </a>
          </li>
          <li
            onClick={handleClick2}
            onKeyDown={handleClick2}
            role="presentation"
          >
            <a href="#Localisation">
              <img src={BiLoc} className="icon" alt="Localisation" />
              Localisation
            </a>
          </li>
        </ul>
      </nav>
      {showCategories && <Categories />}
      {showCategories1 && <Dates />}
      {showCategories2 && <Localisation />}
    </>
  );
}

export default Navigation;

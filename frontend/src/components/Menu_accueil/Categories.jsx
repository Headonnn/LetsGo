import React from "react";
import PropTypes from "prop-types";
import "../../style/_navigationCategories.scss";
import { NavLink } from "react-router-dom";

function Categories({ donnees, setCateg }) {
  const handleClickCategorie = (e) => {
    setCateg(e.target.id);
  };

  const handleCateg = () => {
    let categData = [];

    categData = donnees.map((e) => {
      return e.fields.categorie;
    });

    const filtcategData = categData.filter((e, i) => {
      return categData.indexOf(e) === i;
    });

    return filtcategData.map((e) => {
      if (e === undefined) {
        return (
          <NavLink to="/Page2">
            <div
              className="navigation-categories"
              key="Sans Categorie"
              id="Sans Categorie"
              onClick={(el) => handleClickCategorie(el)}
              onKeyDown={(el) => handleClickCategorie(el)}
              role="presentation"
            >
              Sans Categorie
            </div>
          </NavLink>
        );
      }
      return (
        <NavLink to="/Page2">
          <div
            className="navigation-categories"
            key={e}
            id={e}
            onClick={(el) => handleClickCategorie(el)}
            onKeyDown={(el) => handleClickCategorie(el)}
            role="presentation"
          >
            {e}
          </div>
        </NavLink>
      );
    });
  };
  return <div className="navigation-categories-container">{handleCateg()}</div>;
}

export default Categories;

Categories.propTypes = {
  donnees: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setCateg: PropTypes.string.isRequired,

  // startDate: PropTypes.instanceOf(Date).isRequired,
  // endDate: PropTypes.instanceOf(Date).isRequired,
};

import React from "react";
import PropTypes from "prop-types";

function FavorisFilter({ setIsFavorite }) {
  const handleChange = (e) => {
    setIsFavorite(e.target.value);
  };
  return (
    <div className="MyFavorites">
      <p> FAVORIS :</p>
      <select onChange={(e) => handleChange(e)}>
        <option value="All"> All</option>
        <option value="Mes Favoris"> Mes évenements favoris</option>
      </select>
    </div>
  );
}

export default FavorisFilter;

FavorisFilter.propTypes = {
  setIsFavorite: PropTypes.string.isRequired,
};

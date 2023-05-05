import React from "react";
import PropTypes from "prop-types";

function FavorisFilter({ favoritesFilter, setFavoritesFilter }) {
  const handleCheckBox = () => {
    setFavoritesFilter(!favoritesFilter);
  };

  return (
    <div className="FavFilterDiv">
      <label className="FavLabel">
        Mes événements favoris
        <input className="FavInput" type="checkbox" onChange={handleCheckBox} />
      </label>
    </div>
  );
}

export default FavorisFilter;

FavorisFilter.propTypes = {
  favoritesFilter: PropTypes.bool.isRequired,
  setFavoritesFilter: PropTypes.bool.isRequired,
};

import React from "react";
import PropTypes from "prop-types";

function FavorisFilter({ favoritesFilter, setFavoritesFilter }) {
  const handleCheckBox = () => {
    setFavoritesFilter(!favoritesFilter);
  };

  return (
    <div>
      <label>
        Mes événements favoris
        <input type="checkbox" onChange={handleCheckBox} />
      </label>
    </div>
  );
}

export default FavorisFilter;

FavorisFilter.propTypes = {
  favoritesFilter: PropTypes.bool.isRequired,
  setFavoritesFilter: PropTypes.bool.isRequired,
};

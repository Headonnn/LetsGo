import React from "react";
import PropTypes from "prop-types";

function TarifGratuit({ setFree }) {
  const handleChange = (e) => {
    setFree(e.target.value);
  };

  return (
    <div className="TarifGratuit">
      <select onChange={(e) => handleChange(e)}>
        <option value="Payant et gratuit">Payant et gratuit</option>
        <option value="Payant"> Payant</option>
        <option value="Gratuit"> Gratuit</option>
      </select>
    </div>
  );
}

export default TarifGratuit;

TarifGratuit.propTypes = {
  setFree: PropTypes.string.isRequired,
};

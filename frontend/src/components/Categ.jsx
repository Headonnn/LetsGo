import React from "react";
import PropTypes from "prop-types";

function Categ({ donnees, setCateg }) {
  const handleCateg = () => {
    let haha = [];
    haha = donnees.records.map((e) => {
      return e.fields.categorie;
    });

    const filtHaha = haha.filter((e, i) => {
      return haha.indexOf(e) === i;
    });
    filtHaha.unshift("All");
    return filtHaha.map((e) => {
      return e === undefined ? (
        <option key={e} value={undefined}>
          Sans categorie
        </option>
      ) : (
        <option key={e} value={e}>
          {e}
        </option>
      );
    });
  };
  const handleCategChange = (e) => {
    setCateg(e.target.value);
  };
  return (
    <select onChange={(e) => handleCategChange(e)}>{handleCateg()}</select>
  );
}

export default Categ;
Categ.propTypes = {
  donnees: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setCateg: PropTypes.string.isRequired,
};

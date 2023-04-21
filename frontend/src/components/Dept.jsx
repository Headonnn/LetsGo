import React from "react";
import { PropTypes } from "prop-types";

function Dept({ donnees, setDept }) {
  const handleDept = () => {
    let depa = [];
    depa = donnees.records.map((e) => {
      return e.fields.departement;
    });

    const filtDepa = depa.filter((e, i) => {
      return depa.indexOf(e) === i;
    });
    filtDepa.unshift("All");
    return filtDepa.map((e) => {
      return e === undefined ? (
        <option key={e} value={undefined}>
          Sans Département
        </option>
      ) : (
        <option key={e} value={e}>
          {e}
        </option>
      );
    });
  };
  const handleDepaChange = (e) => {
    setDept(e.target.value);
  };

  return <select onChange={(e) => handleDepaChange(e)}>{handleDept()}</select>;
}

export default Dept;
Dept.propTypes = {
  donnees: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setDept: PropTypes.string.isRequired,
};

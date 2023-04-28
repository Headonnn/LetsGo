import React, { useState } from "react";

import PropTypes from "prop-types";

function Categ({ donnees, setCateg, categ }) {
  const [plus, setPlus] = useState(true);
  const handlePlus = () => {
    setPlus(!plus);
  };
  const handleCategChange = (e) => {
    setCateg(e.target.id);
  };

  const handleCateg = () => {
    let haha = [];
    haha = donnees.map((e) => {
      return e.fields.categorie;
    });

    const filtHaha = haha.filter((e, i) => {
      return haha.indexOf(e) === i;
    });
    filtHaha.unshift("All");
    filtHaha.splice(7, 0, "+");
    return filtHaha.map((e, i) => {
      if (e === undefined && !plus) {
        return (
          <div
            key={e}
            value={undefined}
            onClick={(el) => handleCategChange(el)}
            onKeyDown={(el) => handleCategChange(el)}
            role="presentation"
            id={e}
            className={`boutonCateg ${
              categ === e ? "selected" : "notSelected"
            }`}
          >
            Sans categorie
          </div>
        );
      }
      if (i === 7) {
        return (
          <div
            key="+"
            value={plus}
            onClick={() => handlePlus()}
            onKeyDown={() => handlePlus()}
            role="presentation"
            id="+"
            className="boutonCateg plus"
          >
            {" "}
            {plus ? "+" : "-"}
          </div>
        );
      }
      if ((i > 7 && !plus) || i < 7) {
        return (
          <div
            key={e}
            value={e}
            onClick={(el) => handleCategChange(el)}
            onKeyDown={(el) => handleCategChange(el)}
            role="presentation"
            id={e}
            className={`boutonCateg ${
              categ === e ? "selected" : "notSelected"
            }`}
          >
            {e}
          </div>
        );
      }
      return e;
    });
  };

  return <div className="boutonsCategCont">{handleCateg()}</div>;
}
export default Categ;
Categ.propTypes = {
  donnees: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setCateg: PropTypes.string.isRequired,
  categ: PropTypes.string.isRequired,
};

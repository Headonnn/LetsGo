import React, { useState } from "react";
import PropTypes from "prop-types";
import { TbCurrencyEuroOff, TbCurrencyEuro } from "react-icons/tb";

function TarifGratuit({ setFree, setMinValue, setMaxValue }) {
  const [tarifSelect, setTarifSelect] = useState("");
  const handleChange = (e) => {
    if (e.target.id === tarifSelect) {
      setMinValue(0);
      setMaxValue(300);
      setFree("Payant et gratuit");
      setTarifSelect("");
    } else {
      setFree("Gratuit");
      setMinValue(0);
      setMaxValue(0);
      setTarifSelect("Gratuit");
    }
  };

  const handleRange = (e) => {
    if (e.target.id === tarifSelect) {
      setMinValue(0);
      setMaxValue(300);
      setFree("Payant et gratuit");
      setTarifSelect("");
    } else {
      setTarifSelect(e.target.id);
      if (e.target.id === "petit") {
        setMinValue(0);
        setMaxValue(10);
        setFree("Payant");
        setTarifSelect("petit");
      } else if (e.target.id === "moyen") {
        setMinValue(20);
        setMaxValue(50);
        setFree("Payant");
        setTarifSelect("moyen");
      } else {
        setMinValue(50);
        setMaxValue(300);
        setFree("Payant");

        setTarifSelect("grand");
      }
    }
  };

  return (
    <div className="TarifGratuit">
      <div
        id="Gratuit"
        onClick={(e) => handleChange(e)}
        onKeyDown={(e) => handleChange(e)}
        role="presentation"
        className={`euro ${
          tarifSelect === "Gratuit" ? "selected" : "notSelected"
        }`}
      >
        {" "}
        <TbCurrencyEuroOff />{" "}
      </div>
      <div
        id="petit"
        onClick={(e) => handleRange(e)}
        onKeyDown={(e) => handleChange(e)}
        role="presentation"
        className={`euro ${
          tarifSelect === "petit" ? "selected" : "notSelected"
        }`}
      >
        {" "}
        <TbCurrencyEuro />{" "}
      </div>
      <div
        id="moyen"
        onClick={(e) => handleRange(e)}
        onKeyDown={(e) => handleChange(e)}
        role="presentation"
        className={`euro ${
          tarifSelect === "moyen" ? "selected" : "notSelected"
        }`}
      >
        {" "}
        <TbCurrencyEuro /> <TbCurrencyEuro />{" "}
      </div>
      <div
        id="grand"
        onClick={(e) => handleRange(e)}
        onKeyDown={(e) => handleChange(e)}
        role="presentation"
        className={`euro ${
          tarifSelect === "grand" ? "selected" : "notSelected"
        }`}
      >
        {" "}
        <TbCurrencyEuro /> <TbCurrencyEuro /> <TbCurrencyEuro />{" "}
      </div>
    </div>
  );
}

export default TarifGratuit;

TarifGratuit.propTypes = {
  setFree: PropTypes.string.isRequired,
  setMinValue: PropTypes.string.isRequired,
  setMaxValue: PropTypes.string.isRequired,
};

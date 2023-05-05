import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../style/_navigationCategories.scss";
import { NavLink } from "react-router-dom";

function Dates({ setDateEvMin, setDateEvMax }) {
  const [selectedDay, setSelectedDay] = useState("year");

  const handleDateEv = (e) => {
    setSelectedDay(e.target.id);

    if (e.target.id === "auj") {
      const auj = new Date();
      const auj2 = new Date();
      auj.setHours(0, 0, 0, 0);
      auj2.setHours(23, 59, 59);
      setDateEvMin(auj.toString());
      setDateEvMax(auj2.toString());
    }
    if (e.target.id === "demain") {
      const tomorrow = new Date();

      tomorrow.setHours(24, 0, 0, 0);
      setDateEvMax(tomorrow.toString());
      setDateEvMin(tomorrow.toString());
    }
    if (e.target.id === "we") {
      const we = new Date();
      const diff = 6 - we.getDay();
      we.setHours(24 * diff, 0, 0, 0);
      setDateEvMin(we.toString());
      setDateEvMax(we.toString());
    }
    if (e.target.id === "month") {
      const mo = new Date();
      setDateEvMin(new Date(`${mo.getMonth() + 1}/01/2023`).toString());
      setDateEvMax(new Date(`${mo.getMonth() + 1}/31/2023`).toString());
    }
    if (e.target.id === "year") {
      setDateEvMin(new Date("01/01/2023").toString());
      setDateEvMax(new Date("12/31/2023").toString());
    }
  };
  return (
    <div className="FiltreDate">
      <NavLink to="/Evenements">
        <div
          className={`date ${
            selectedDay === "auj" ? "selected" : "notSelected"
          }`}
          id="auj"
          onClick={(e) => handleDateEv(e)}
          onKeyDown={(e) => handleDateEv(e)}
          role="presentation"
        >
          Aujourd'hui
        </div>
      </NavLink>
      <NavLink to="/Evenements">
        <div
          className={`date ${
            selectedDay === "demain" ? "selected" : "notSelected"
          }`}
          id="demain"
          onClick={(e) => handleDateEv(e)}
          onKeyDown={(e) => handleDateEv(e)}
          role="presentation"
        >
          Demain
        </div>
      </NavLink>
      <NavLink to="/Evenements">
        <div
          className={`date ${
            selectedDay === "we" ? "selected" : "notSelected"
          }`}
          id="we"
          onClick={(e) => handleDateEv(e)}
          onKeyDown={(e) => handleDateEv(e)}
          role="presentation"
        >
          Ce week-end
        </div>
      </NavLink>
      <NavLink to="/Evenements">
        <div
          className={`date ${
            selectedDay === "month" ? "selected" : "notSelected"
          }`}
          id="month"
          onClick={(e) => handleDateEv(e)}
          onKeyDown={(e) => handleDateEv(e)}
          role="presentation"
        >
          Ce mois-ci
        </div>
      </NavLink>
      <NavLink to="/Evenements">
        {" "}
        <div
          className={`date ${
            selectedDay === "year" ? "selected" : "notSelected"
          }`}
          id="year"
          onClick={(e) => handleDateEv(e)}
          onKeyDown={(e) => handleDateEv(e)}
          role="presentation"
        >
          Cette Année
        </div>
      </NavLink>
    </div>
  );
}

export default Dates;

Dates.propTypes = {
  setDateEvMax: PropTypes.string.isRequired,
  setDateEvMin: PropTypes.string.isRequired,
  // startDate: PropTypes.instanceOf(Date).isRequired,
  // endDate: PropTypes.instanceOf(Date).isRequired,
};

import React, { useState } from "react";
import PropTypes from "prop-types";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

function FiltreDate({ calend, setCalend, setDateEvMin, setDateEvMax }) {
  const [showCalend, setShowCalend] = useState(false);
  const [selectedDate, setSelectedDate] = useState("year");

  const handleDateEv = (e) => {
    setSelectedDate(e.target.id);

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
      setDateEvMin(tomorrow.toString());
      setDateEvMax(tomorrow.toString());
    }
    if (e.target.id === "we") {
      const we = new Date();
      const we2 = new Date();
      const diff = 6 - we.getDay();
      const diff2 = 7 - we.getDay();
      we.setHours(24 * diff, 0, 0, 0);
      we2.setHours(24 * diff2, 0, 0, 0);

      setDateEvMin(we.toString());
      setDateEvMax(we2.toString());
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
      <div
        className={`date ${
          selectedDate === "auj" ? "selected" : "notSelected"
        }`}
        id="auj"
        onClick={(e) => handleDateEv(e)}
        onKeyDown={(e) => handleDateEv(e)}
        role="presentation"
      >
        Aujourd'hui
      </div>
      <div
        className={`date ${
          selectedDate === "demain" ? "selected" : "notSelected"
        }`}
        id="demain"
        onClick={(e) => handleDateEv(e)}
        onKeyDown={(e) => handleDateEv(e)}
        role="presentation"
      >
        Demain
      </div>
      <div
        className={`date ${selectedDate === "we" ? "selected" : "notSelected"}`}
        id="we"
        onClick={(e) => handleDateEv(e)}
        onKeyDown={(e) => handleDateEv(e)}
        role="presentation"
      >
        Ce week-end
      </div>
      <div
        className={`date ${
          selectedDate === "month" ? "selected" : "notSelected"
        }`}
        id="month"
        onClick={(e) => handleDateEv(e)}
        onKeyDown={(e) => handleDateEv(e)}
        role="presentation"
      >
        Ce mois-ci
      </div>
      <div
        className={`date ${
          selectedDate === "year" ? "selected" : "notSelected"
        }`}
        id="year"
        onClick={(e) => handleDateEv(e)}
        onKeyDown={(e) => handleDateEv(e)}
        role="presentation"
      >
        Cette Année
      </div>
      <div
        className="date"
        onClick={() => {
          setShowCalend(!showCalend);
          setSelectedDate("");
        }}
        onKeyDown={() => {
          setShowCalend(!showCalend);
          setSelectedDate("");
        }}
        role="presentation"
      >
        Choisir un jour
      </div>

      {showCalend && (
        <DateRange
          editableDateInputs
          onChange={(item) => {
            setCalend([item.selection]);
            setDateEvMin(calend[0].startDate.toString());
            setDateEvMax(calend[0].endDate.toString());
          }}
          moveRangeOnFirstSelection={false}
          ranges={calend}
        />
      )}
    </div>
  );
}

export default FiltreDate;
FiltreDate.propTypes = {
  calend: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setCalend: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setDateEvMax: PropTypes.string.isRequired,
  setDateEvMin: PropTypes.string.isRequired,
  // startDate: PropTypes.instanceOf(Date).isRequired,
  // endDate: PropTypes.instanceOf(Date).isRequired,
};

import React from "react";
import PropTypes from "prop-types";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

function FiltreDate({ calend, setCalend }) {
  return (
    <DateRange
      editableDateInputs
      onChange={(item) => {
        setCalend([item.selection]);
      }}
      moveRangeOnFirstSelection={false}
      ranges={calend}
    />
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
  // startDate: PropTypes.instanceOf(Date).isRequired,
  // endDate: PropTypes.instanceOf(Date).isRequired,
};

import PropTypes from "prop-types";

function MultiRangeSlider({ minValue, setMinValue, maxValue, setMaxValue }) {
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <div className="MultiRangeSlider">
      <MultiRangeSlider
        min={0}
        max={5}
        step={5}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    </div>
  );
}

export default MultiRangeSlider;

MultiRangeSlider.propTypes = {
  minValue: PropTypes.string.isRequired,
  setMinValue: PropTypes.string.isRequired,
  maxValue: PropTypes.string.isRequired,
  setMaxValue: PropTypes.string.isRequired,
};

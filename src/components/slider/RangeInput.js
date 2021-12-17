import React from "react";
import RangeValue from "./RangeValue";

const RangeInput = ({ setIsMounted, isMounted, min, max, currYear, setCurrYear }) => {
  const handleChange = (e) => {
    setIsMounted(!isMounted);
    setCurrYear(e.target.value);
  }
  return (
    <React.Fragment>
      <label htmlFor="slider">Slider</label>
      <input
        id="slider"
        className="range-slider__range"
        type="range"
        min={min}
        max={max}
        value={currYear}
        onChange={handleChange}
      />
      <RangeValue currYear={currYear} />
    </React.Fragment>
  );
};

export default RangeInput;

import React from "react";
import RangeValue from "./RangeValue";

const RangeInput = ({ min, max, currYear, setCurrYear }) => {
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
        onChange={(e) => setCurrYear(e.target.value)}
      />
      <RangeValue currYear={currYear} />
    </React.Fragment>
  );
};

export default RangeInput;

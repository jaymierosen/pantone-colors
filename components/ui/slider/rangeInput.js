import React from "react";
import RangeValue from "./RangeValue";

const RangeInput = ({ currVal, setCurrVal }) => {
  return (
    <React.Fragment>
      <label htmlFor="slider">Slider</label>
      <input
        id="slider"
        className="range-slider__range"
        type="range"
        min={2000}
        max={2021}
        value={currVal}
        onChange={(e) => setCurrVal(e.target.value)}
      />
      <RangeValue currVal={currVal} />
    </React.Fragment>
  );
};

export default RangeInput;

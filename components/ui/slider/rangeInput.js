import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import RangeValue from "./rangeValue";

const RangeInput = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  // const minValRef = useRef(min);
  // const maxValRef = useRef(max);
  // const range = useRef(null);

  return (
    <React.Fragment>
      <input
        className="range-slider__range"
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(e) => setMinVal(e.target.value)}
      />
      <RangeValue value={minVal} />
    </React.Fragment>
  );
};

RangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default RangeInput;

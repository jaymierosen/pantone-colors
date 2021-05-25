import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const RangeInput = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  // const minValRef = useRef(min);
  // const maxValRef = useRef(max);
  // const range = useRef(null);

  return (
    <React.Fragment>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={e => setMinVal(e.target.value)}
      />
      <div className="range-slider__value">{minVal}</div>
    </React.Fragment>
  );
};

RangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default RangeInput;

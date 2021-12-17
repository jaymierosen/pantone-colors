import React from "react";

// const !!thing = "hello"
// return true

const ColorHex = ({ hex, hex2 }) => {
  return (
    <div>
      <h3 key={`swatch-${hex}-${hex2 || hex}`} className="swatch-hex">
        {hex} {hex2 && ` & ${hex2}`}
      </h3>
    </div>
  );
};

export default ColorHex;

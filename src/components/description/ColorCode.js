import React from "react";

const ColorCode = ({ swatch }) => {
  return (
    <div>
      <h3 key={`swatch-${swatch}`} className="swatch-color-code">
        {swatch}
      </h3>
    </div>
  );
};

export default ColorCode;

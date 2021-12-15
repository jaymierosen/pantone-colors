import React from "react";

const ColorName = ({ colorName }) => {
  return (
    <div>
      <h3 key={`swatch-${colorName}`} className="swatch-color-name">
        {colorName}
      </h3>
    </div>
  );
};

export default ColorName;

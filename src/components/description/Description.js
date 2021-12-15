import React from "react";

// Components
import ColorCode from "./ColorCode";
import ColorHex from "./ColorHex";
import ColorName from "./ColorName";

const Description = ({ currentPantone }) => {
  const { hex, hex2, swatch, colorName } = currentPantone;

  return (
    <div>
      <ColorHex hex={hex} hex2={hex2} />
      <ColorCode swatch={swatch} />
      <ColorName colorName={colorName} />
    </div>
  );
};

export default Description;

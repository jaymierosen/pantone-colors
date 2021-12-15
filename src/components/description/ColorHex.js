import React from "react";

// const !!thing = "hello"
// return true

const ColorHex = ({ hex, hex2 }) => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body { background: linear-gradient(to right, ${hex} 50%, ${
            hex2 || hex
          } 50%)
            `,
            // try a ternary instead
        }}
      />
      <h3 key={`swatch-${hex}-${hex2 || hex}`} className="swatch-hex">
        {hex} {hex2 && ` & ${hex2}`}
      </h3>
    </div>
  );
};

export default ColorHex;

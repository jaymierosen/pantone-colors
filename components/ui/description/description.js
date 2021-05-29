import React from "react";
import { useState, useEffect } from "react";
import RangeInput from "../slider/rangeInput";

const Description = () => {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://pantone-colors.herokuapp.com/colors/")
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => {
        err, setHasError(true);
        setLoading(false);
      });
  }, []);

  const [first, second, third, fourth, fifth] = state;

  return (
    <>
      <div className="description">
        <h2>
          PANTONE<sup>&reg;</sup>
        </h2>
        {/* { loading ? "" : <div>Loading</div> } */}
        {hasError ? (
          <div>Error occured.</div>
        ) : (
          state.map((pantone) => {
            {
              switch (pantone.year) {
                case 2000:
                  <div>
                    <h3>hellooooo</h3>
                  </div>;
                  break;
                case 2001:
                  <div>
                    <h3 key={`hex-${pantone.hex}`} className="hex-number">
                      {pantone.hex}
                    </h3>
                    <h3
                      key={`swatch-${pantone.swatch}`}
                      className="swatch-number"
                    >
                      {pantone.swatch}
                    </h3>
                    <h3
                      key={`colorName-${pantone.colorName}`}
                      className="color-name"
                    >
                      {pantone.colorName}
                    </h3>
                  </div>;
                default:
                  break;
              }
            }
          })
        )}
      </div>
    </>
  );
};

export default Description;

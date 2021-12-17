import { React } from "react";
import Description from "../description/Description";

const Swatch = ({ currentPantone, hasTransitionedIn, isMounted }) => {
  return (
    <section className="swatch">
      {(hasTransitionedIn || isMounted) && (
        <section
          className={`color ${hasTransitionedIn} ${
            isMounted && "fadeIn"
          }`}
          style={{
            background: `linear-gradient(-45deg, ${currentPantone.hex} 37%, ${
              currentPantone.hex2 || currentPantone.hex
            } 56%)`,
          }}
        ></section>
      )}
      <section className="description">
        <h2>
          PANTONE<sup className="swatch-superscript">&reg;</sup>
        </h2>
        <Description currentPantone={currentPantone} />
      </section>
    </section>
  );
};

export default Swatch;

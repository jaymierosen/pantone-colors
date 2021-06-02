import React from "react";

// Babel
require("babel-core/register");
require("babel-polyfill");
// src: https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined

// Styles
import "../src/stylesheets/index.scss";

// Redux
// import { Counter } from "./Counter";

// Components
import Loading from "./UI/Loading/Loading";
import Swatch from "./UI/Swatch/Swatch";
import Slider from "./UI/slider/Slider";

// Hooks
import { useState, useEffect } from "react";

const App = ({ min, max }) => {
  const [state, setState] = useState([]);
  const [pantoneLoaded, setPantoneLoaded] = useState(false);
  const [currVal, setCurrVal] = useState(2000);

  const fetchPantone = async () => {
    try {
      let response = await fetch(
        "https://pantone-colors.herokuapp.com/colors/"
      );
      let json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  useEffect(() => {
    (async () => {
      setPantoneLoaded(false);
      let res = await fetchPantone();
      if (res.success) {
        setState(res.data);
        setPantoneLoaded(true);
      }
    })();
  }, []);

  const [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleventh,
    twelfth,
    thirteenth,
    fourteenth,
    fifteenth,
    sixteenth,
    seventeeth,
    eighteenth,
    ninteen,
    twenty,
    twentyfirst,
  ] = state;

  min = "2000";
  max = "2021";

  return (
    <div>
      {pantoneLoaded ? (
        <React.Fragment>
          {/* <Counter /> */}
          <main>
          <h1>{['Pantone', <sup className="heading-superscript">&reg;</sup>, ` Color of the Year: ${min} - ${max}`]}</h1>
            <div className="wrapper">
              <Swatch
                first={first}
                second={second}
                third={third}
                fourth={fourth}
                fifth={fifth}
                currVal={currVal}
              />
              <Slider
                setCurrVal={setCurrVal}
                currVal={currVal}
                min={min}
                max={max}
              />
            </div>
          </main>
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;

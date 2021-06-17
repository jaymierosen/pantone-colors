import React from "react";

// Styles
import "./index.scss";

// Redux
// import { Counter } from "./Counter";

// Components
import Loading from "./components/loading/Loading";
import Swatch from "./components/swatch/Swatch";
import Slider from "./components/slider/Slider";

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
    seventeenth,
    eighteenth,
    ninteenth,
    twentieth,
    twentyfirst,
    twentysecond
  ] = state;

  min = "2000";
  max = "2021";

  return (
    <div>
      {pantoneLoaded ? (
        <React.Fragment>
          {/* <Counter /> */}
          <main>
          <h1>{['Pantone', <sup key={`sup`} className="heading-superscript">&reg;</sup>, ` Color of the Year: ${min} - ${max}`]}</h1>
            <div className="wrapper">
              <Swatch
                first={first}
                second={second}
                third={third}
                fourth={fourth}
                fifth={fifth}
                sixth={sixth}
                seventh={seventh}
                eighth={eighth}
                ninth={ninth}
                tenth={tenth}
                eleventh={eleventh}
                twelfth={twelfth}
                thirteenth={thirteenth}
                fourteenth={fourteenth}
                fifteenth={fifteenth}
                sixteenth={sixteenth}
                seventeenth={seventeenth}
                eighteenth={ eighteenth}
                ninteenth={ninteenth}
                twentieth={twentieth}
                twentyfirst={twentyfirst}
                twentysecond={twentysecond}
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

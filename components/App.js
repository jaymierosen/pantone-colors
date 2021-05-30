import React from "react";

// Styles
import "../src/stylesheets/index.scss";

// Redux
import { Counter } from "./Counter";

// Components
import Swatch from '../Components/UI/Swatch/Swatch';
import Slider from "./UI/slider/Slider";

// Hooks
import { useState, useEffect } from "react";

const App = ({ min, max }) => {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currVal, setCurrVal] = useState(2000);

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
    <React.Fragment>
      <Counter />
      <main className="wrapper">
        <h1>{`Color of the Year: ${min} - ${max}`}</h1>
        <Swatch
          first={first}
          second={second}
          third={third}
          fourth={fourth}
          fifth={fifth}
          currVal={currVal}
        />
        <Slider setCurrVal={setCurrVal} currVal={currVal} min={min} max={max} />
      </main>
    </React.Fragment>
  );
};

export default App;

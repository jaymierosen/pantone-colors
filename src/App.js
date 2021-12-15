import React from "react";

// Styles
import "./index.scss";

// Components
import Loading from "./components/loading/Loading";
import Swatch from "./components/swatch/Swatch";
import Slider from "./components/slider/Slider";

// Hooks
import { useState, useEffect } from "react";

const App = ({ min, max }) => {
  const [pantoneLoaded, setPantoneLoaded] = useState(false);
  const [currYear, setCurrYear] = useState("2000");
  const [pantoneData, setPantoneData] = useState([]);
  const [currentPantone, setCurrentPantone] = useState({});

  // working with active state

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
        setPantoneData(res.data);
        setPantoneLoaded(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (pantoneLoaded) {
      const theCurrentPantone = pantoneData.find(
        // making sure same data type
        (pantone) => pantone.year.toString() === currYear.toString()
      );

      setCurrentPantone(theCurrentPantone);
    }

    // eslint-disable-next-line
  }, [currYear, pantoneLoaded]);

  min = "2000";
  max = "2022";

  return (
    <div>
      {pantoneLoaded && currentPantone ? (
        <React.Fragment>
          {/* <Counter /> */}
          <main>
            <h1>
              {[
                "Pantone",
                <sup key={`sup`} className="heading-superscript">
                  &reg;
                </sup>,
                ` Color of the Year: ${min} - ${max}`,
              ]}
            </h1>
            <div className="wrapper">
              <Swatch currentPantone={currentPantone} />
              <Slider
                setCurrYear={setCurrYear}
                currYear={currYear}
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

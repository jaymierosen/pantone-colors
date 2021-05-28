import React from 'react';
import '../src/stylesheets/index.scss';

import { useState, useEffect } from 'react';
// import Swatch from './ui/swatch/swatch';
// import Slider from './ui/slider/slider';

const App = ({ min, max }) => {
    
    const [state, setState] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [minVal, setMinVal] = useState(2000);
    const [maxVal, setMaxVal] = useState(2021);

    console.log(minVal)

    useEffect(() => {
      setLoading(true);
      fetch("https://pantone-colors.herokuapp.com/colors/")
      .then(res => res.json())
      .then(data => setState(data))
      .catch(err => {
        err,
        setHasError(true)
        setLoading(false)
      })
      
    }, []);
    
    const [ first, second, third, fourth, fifth ] = state;

    min = 2000;
    max = 2021;

    return (
        <React.Fragment>
            <h1>Color of the Year: 2000 - 2020</h1>
            <div className="wrapper">
                <div className="swatch">
                <div className="color"></div>
                <div className="description">
                    <h2>PANTONE<sup>&reg;</sup></h2>
                    
                </div>
                </div>
                <div className="range-slider">
                <input
                    className="range-slider__range"
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={e => setMinVal(e.target.value)}
                    />
                    <div className="range-slider__value"><h4>{minVal}</h4></div>
		        </div>
            </div>
        </React.Fragment>
    );
}
export default App;
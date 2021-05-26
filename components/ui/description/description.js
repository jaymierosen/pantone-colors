import React, { Component } from 'react';
import { useState, useEffect } from 'react';

const Description = () => {
    const [state, setState] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      fetch("https://pantone-colors.herokuapp.com/colors/")
      .then(res => res.json())
      // .then(res =>  console.log(res))
      .then(data => setState(data))
      .catch(err => {
        err,
        setHasError(true)
        setLoading(false)
      })
      
    }, []);
    
    const [ first, second, third, fourth, fifth ] = state;

    return (
    <div className="description">
      {
        hasError ? <div>Error occured.</div> : (state.map((pantone, i) =>
            <div key={`i-${i}`}>
              <h2>PANTONE<sup>&reg;</sup></h2>
              <h3 key={`hex-${pantone.hex}`} className="hex-number">{pantone.hex}</h3>
              <h3 key={`swatch-${pantone.swatch}`} className="swatch-number">{pantone.swatch}</h3>
              <h3 key={`colorName-${pantone.colorName}`} className="color-name">{pantone.colorName}</h3>
            </div>
          ))
      }
    </div>
  )
};

export default Description;
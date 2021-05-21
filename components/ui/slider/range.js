import React, { Component } from 'react';

export default class range extends Component {

  render() {
    return (
      <input
        onChange="" 
        className="range-slider__range" 
        type="range"
        value="2001"
        min="2001"
        max="2021" />
    )
  }
};
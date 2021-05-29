import React, { Component } from "react";
import RangeInput from "./rangeInput";

export default class Slider extends Component {
  render() {
    return (
      <div className="range-slider">
        <RangeInput min={2000} max={2021} />
      </div>
    );
  }
}

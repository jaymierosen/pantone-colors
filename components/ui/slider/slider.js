import React, { Component } from 'react';
import Range from './range';
import RangeValue from './rangeValue';

export default class slider extends Component {

  render() {
    return (
      <div className="range-slider">
			  <Range />
        <RangeValue />
	  	</div>
    )
  }
};

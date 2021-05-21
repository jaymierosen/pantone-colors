import React, { Component } from 'react';
import Description from '../description/description';

export default class swatch extends Component {

  render() {
    return (
      <div className="swatch">
			<div className="color"></div>
        <Description />
		</div>
    )
  }
};

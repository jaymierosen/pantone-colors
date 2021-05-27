import React from 'react';
import '../src/stylesheets/index.scss';
import Swatch from './ui/swatch/swatch';
import Slider from './ui/slider/slider';

function App() {
    return (
        <React.Fragment>
            <h1>Color of the Year: 2000 - 2020</h1>
            <div className="wrapper">
                <Swatch />
                <Slider />
            </div>
        </React.Fragment>
    );
}
export default App;
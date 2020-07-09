import React from "react";

import createGuitar from "../../util/guitar";
import Fret from './Fret';

const Fretboard = ({ width, height, numStrings = 6 }) => {
  const guitar = createGuitar();
  const percentages = guitar.getWidthsPercent(15);
  const notes = [
    [1, 1],
    [2, 2]
  ];
  return (
    <div style={fretboardStyle.container}>
      {percentages.map((percentage, index) => {
        return <Fret key={index} width={percentage * width} height={height / numStrings} num={index + 1} />;
      })}
    </div>
  );
};

const fretboardStyle = {
  container: {
    height: 100,
    width: 800,
    display: 'flex',
    border: '1px solid lightgray'
  }
};

export default Fretboard;

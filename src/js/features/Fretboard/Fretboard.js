import React from "react";

import createGuitar from "../../util/guitar";
import Fret from './Fret';

const Fretboard = ({ width = 800, height = 100, numStrings = 6, scaleLength = 25.5, numFrets = 15 }) => {
  const guitar = createGuitar(scaleLength);
  const percentages = guitar.getWidthsPercent(numFrets);
  return (
    <div style={{ ...fretboardStyle.container, width, height }}>
      {percentages.map((percentage, index) => {
        return <Fret key={index} width={percentage * width} height={height / numStrings} num={index + 1} numStrings={numStrings} />;
      })}
    </div>
  );
};

const fretboardStyle = {
  container: {
    display: 'flex',
    border: '1px solid lightgray',
    marginBottom: 20
  }
};

export default Fretboard;

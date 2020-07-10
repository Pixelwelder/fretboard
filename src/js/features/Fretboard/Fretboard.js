import React from "react";

import createGuitar from "../../util/guitar";
import Fret from './Fret';

const Fretboard = ({
  width = 800,
  height = 100,
  tuning = ['e4', 'b4', 'g3', 'd3', 'a3', 'e2'],
  scaleLength = 25.5,
  numFrets = 15,
  notes = []
}) => {
  const fretboardWidth = width - 50;
  const guitar = createGuitar(scaleLength);
  const percentages = guitar.getWidthsPercent(numFrets);

  const { notesByFret, notesByString } = notes.reduce((accum, [string, fret]) => {
    const fretObj = accum.notesByFret[fret] || {};
    const stringObj = accum.notesByString[string] || {};
    return {
      ...accum,
      notesByFret: { ...accum.notesByFret, [fret]: { ...fretObj, [string]: true } },
      notesByString: { ...accum.notesByString, [string]: { ...stringObj, [fret]: true } }
    };
  }, { notesByFret: {}, notesByString: {} });
  console.log(notesByFret);
  console.log(notesByString);
  const openStrings = notesByFret[0];
  console.log(openStrings);

  return (
    <div style={{ ...localStyle.container, width, height }}>
      <div style={localStyle.leftContainer}>
      </div>
      <div style={{ ...localStyle.fretboard, width: fretboardWidth, height }}>
        {percentages.map((percentage, index) => {
          const fretNum = index + 1;
          const notes = notesByFret[fretNum] || {};
          return (
            <Fret
              key={index}
              width={percentage * fretboardWidth}
              height={height / tuning.length}
              num={fretNum}
              tuning={tuning}
              notes={notes}
              openStrings={openStrings}
            />
          );
        })}
      </div>
    </div>
  );
};

const localStyle = {
  container: {
    background: '#eeeeee',
    display: 'flex'
  },
  leftContainer: {
    width: 50
  },
  fretboard: {
    display: 'flex',
    border: '1px solid lightgray',
    marginBottom: 20
  }
};

export default Fretboard;

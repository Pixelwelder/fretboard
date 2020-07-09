import React from "react";

import GuitarString from './GuitarString';

const Fret = ({ width, height, num, dotSize = 10 }) => {
  const showDot = [3, 5, 7, 9, 15, 17, 19, 21].includes(num);
  const showTwoDots = [12, 24].includes(num);
  return (
    <div style={{ ...fretStyle.container, width }}>
      {showDot && (
        <div style={{ ...fretStyle.dot, width: dotSize, height: dotSize, marginLeft: -dotSize / 2, marginTop: -dotSize / 2 }} />
      )}
      {showTwoDots && (
        <>
          <div style={{ ...fretStyle.dot12a, width: dotSize, height: dotSize, marginLeft: -dotSize / 2, marginTop: -dotSize / 2 }} />
          <div style={{ ...fretStyle.dot12b, width: dotSize, height: dotSize, marginLeft: -dotSize / 2, marginTop: -dotSize / 2 }} />
        </>
      )}
      {
        [1, 2, 3, 4, 5, 6].map((num, index) => <GuitarString key={index} height={height} stringWidth={num} fretNum={num} />)
      }
    </div>
  );
};

const dot = {
  backgroundColor: 'lightgray',
  position: 'absolute',
  borderRadius: '100%',
  left: '50%'
};

const fretStyle = {
  container: {
    position: 'relative',
    borderColor: 'gray',
    borderRight: '5px solid gray'
  },
  dot: {
    ...dot,
    top: '50%',
  },
  dot12a: {
    ...dot,
    top: '25%',
  },
  dot12b: {
    ...dot,
    top: '75%',
  }
};

export default Fret;

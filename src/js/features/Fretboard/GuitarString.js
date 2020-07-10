import React from "react";

import { getInterval } from '../../util/scale';

const GuitarString = ({ height, stringWidth, fretNum, showNote = false, noteSize = 18, openNote, isOpen }) => {
  if (showNote) {
    console.log(openNote, fretNum);
  }
  const note = getInterval(openNote, fretNum);
  let stringStyle = { ...localStyle.string, height: stringWidth };
  if (isOpen) stringStyle = { ...stringStyle, ...localStyle.stringOpen };

  return (
    <div style={{ ...localStyle.container, height }} >
      <div style={stringStyle} />
      {showNote && <div style={{
        ...localStyle.note,
        width: noteSize,
        height: noteSize,
        marginTop: -noteSize / 2,
        marginLeft: -noteSize / 2
      }}>{note}</div>}
    </div>
  );
}

const localStyle = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative'
  },
  string: {
    backgroundColor: 'darkgray',
    height: 1
  },
  stringOpen: {
    backgroundColor: '#ffcc00'
  },
  note: {
    backgroundColor: '#ffcc00',
    position: 'absolute',
    left: '50%',
    top: '50%',
    borderRadius: '100%',
    border: '1px solid white',
    fontFamily: 'helvetica',
    fontSize: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default GuitarString;

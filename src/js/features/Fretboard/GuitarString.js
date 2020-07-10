import React from "react";

import { getInterval } from '../../util/scale';
import Note from "./Note";

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
      {showNote && <Note note={note} size={noteSize} />}
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
  }
};

export default GuitarString;

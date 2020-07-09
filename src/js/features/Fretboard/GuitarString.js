import React from "react";

const GuitarString = ({ height, stringWidth, fretNum, note, noteSize = 20 }) => {
  return (
    <div style={{ ...stringStyle.container, height }} >
      <div style={{ ...stringStyle.string, height: stringWidth }} />
      {note && <div style={{
        ...stringStyle.note,
        width: noteSize,
        height: noteSize,
        marginTop: -noteSize / 2,
        marginLeft: -noteSize / 2
      }}>{note}</div>}
    </div>
  );
}

const stringStyle = {
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
  note: {
    backgroundColor: '#ffcc00',
    position: 'absolute',
    left: '50%',
    top: '50%',
    borderRadius: '100%',
    border: '1px solid black',
    fontFamily: 'helvetica',
    fontSize: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default GuitarString;

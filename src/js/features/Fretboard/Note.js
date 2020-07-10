import React from "react";

const Note = ({ note, size }) => {
  return (
    <div style={{
      ...localStyle.note,
      width: size,
      height: size,
      marginTop: -size / 2,
      marginLeft: -size / 2
    }}>
      {note}
    </div>
  );
};

const localStyle = {
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

export default Note;
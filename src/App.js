import React from 'react';

import createGuitar from "./js/util/guitar";
import Fretboard from "./js/features/Fretboard/Fretboard";

const App = () => {
  return (
    <div style={{ padding: 100 }}>
      <Fretboard width={800} height={100} />
    </div>
  );
}

export default App;

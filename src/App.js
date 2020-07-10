import React from 'react';

import Fretboard from "./js/features/Fretboard/Fretboard";

const App = () => {
  return (
    <div style={{ padding: 100 }}>
      <Fretboard width={1000} height={120} numFrets={12} numStrings={6} notes={[[1, 2], [2, 3], [3, 2], [4, 0]]} />
      {/*<Fretboard width={1000} height={120} numFrets={15} numStrings={6} />*/}
      {/*<Fretboard width={800} height={150} numFrets={5} numStrings={7} />*/}
    </div>
  );
}

export default App;

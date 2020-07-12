const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Instead of doing math, let's just generate an array of supported notes.
const generateNotes = () => {
  return Array(10).fill(null).reduce((accum, item, index) => {
    return [...accum, ...noteNames.map(name => `${name}${index}`) ]
  }, []);
};
const generatedNotes = generateNotes();


/**
 * Takes a note in the form 'a#2' and returns ['A#', 2]. Highest note is B9
 * @param note
 * @returns [note, octave]
 */
const parseNote = note => {
  // This is a little nasty but we have a very limited set of inputs.
  return [
    note.slice(0, -1).toUpperCase(),
    parseInt(note.slice(-1))
  ];
};

const getInterval = (root, interval) => {
  const formattedNote = root.toUpperCase();
  const [note, octave] = parseNote(root);
  const index = generatedNotes.findIndex(n => n === formattedNote);
  return generatedNotes[index + interval];
};

module.exports = { parseNote, getInterval };

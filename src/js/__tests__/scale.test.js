const { parseNote, getInterval } = require('../util/scale');

describe('parseNote', () => {
  test('it should parse notes into their constituent parts', () => {
    expect(parseNote('a#2')).toEqual(['A#', 2]);
    expect(parseNote('C0')).toEqual(['C', 0]);
  });
});

describe('getInterval', () => {
  test('it should get the specified note', () => {
    expect(getInterval('c2', 1)).toBe('C#2');
    expect(getInterval('c2', -1)).toBe('B1');
    expect(getInterval('a#2', 11)).toBe('A#3');
  });
});
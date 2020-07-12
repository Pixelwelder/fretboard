const createGuitar = require('../util/guitar');

describe('createGuitar', () => {
  describe('getNote', () => {
    test('it should get the correct note', () => {
      const guitar = createGuitar();
      expect(guitar.getNote(1, 2)).toBe('F#4');
      expect(guitar.getNote(5, 0)).toBe('A3');
    });
  });
});
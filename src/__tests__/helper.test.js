import { arrayFlat, setClass } from '../helper';

describe('Helper\'s functions', () => {
  describe('arrayFlat', () => {
    test('numbers', () => {
      const from = [1, 2, [3, [4, 5], 6]];
      const to = [1, 2, 3, 4, 5, 6];
      expect(arrayFlat(from)).toEqual(to);
    });

    test('strings', () => {
      const from = ['1', '2', ['3', '4']];
      const to = ['1', '2', '3', '4'];
      expect(arrayFlat(from)).toEqual(to);
    });

    test('mixed', () => {
      const from = [1, '2', ['3', { a: 0 }]];
      const to = [1, '2', '3', { a: 0 }];
      expect(arrayFlat(from)).toEqual(to);
    });
  });

  describe('setClass', () => {
    test('strings', () => {
      const node = document.createElement('div');
      const from = ['a', 'b', 'c d'];
      const to = 'a b c d';
      setClass(node, from);
      expect(node.className).toBe(to);
    });

    test('mixed', () => {
      const node = document.createElement('div');
      const from = ['a', false, 'c d'];
      const to = 'a c d';
      setClass(node, from);
      expect(node.className).toBe(to);
    });
  });
});

import BalancedBrackets from './BalancedBrackets';

describe('BalancedBrackets', () => {
  describe('getBracketCharacters()', () => {
    it('should return an empty array when string is empty', () => {
      const result = BalancedBrackets.getBracketCharacters();
      expect(result).toEqual(expect.any(Array));
      expect(result.length).toBe(0);
    });

    it('should return an empty array when string does not have brackets', () => {
      const test = 'abc';

      const result = BalancedBrackets.getBracketCharacters(test);
      expect(result).toEqual(expect.any(Array));
      expect(result.length).toBe(0);
    });

    it('should return an array of bracket characters', () => {
      const test = '1[2(3{';

      const result = BalancedBrackets.getBracketCharacters(test);
      expect(result).toEqual(expect.any(Array));
      expect(result.length).toBe(3);
      expect(result[0]).toBe('[');
      expect(result[1]).toBe('(');
      expect(result[2]).toBe('{');
    });
  });

  describe('hasBalancedBrackets()', () => {
    it('should return true when brackets is an empty array', () => {
      const test = [];

      const result = BalancedBrackets.hasBalancedBrackets(test);
      expect(result).toBe(true);
    });

    it('should return false when brackets has an odd number of items', () => {
      const test = ['{', '}', '('];

      const result = BalancedBrackets.hasBalancedBrackets(test);
      expect(result).toBe(false);
    });

    it('should return false when opening bracket appears after a closing bracket', () => {
      const test = ['}', '{'];

      const result = BalancedBrackets.hasBalancedBrackets(test);
      expect(result).toBe(false);
    });

    it('should return false if any bracket pair closes out of order', () => {
       const test = ['[', '{', ']', '}'];

      const result = BalancedBrackets.hasBalancedBrackets(test);
      expect(result).toBe(false);
    });

    it('should return true when all brackets occur in the correct order', () => {
      const test = ['[', '{', '}', ']'];

      const result = BalancedBrackets.hasBalancedBrackets(test);
      expect(result).toBe(true);
    });
  });

  describe('with sample input data', () => {
    it('should return the expected output', () => {
      const firstResult = BalancedBrackets.solve('[{(1+2) * (x-4)}]');
      expect(firstResult).toBe('Y [{()()}]');

      const secondResult = BalancedBrackets.solve('(1+2)*y^2[+(x*y)');
      expect(secondResult).toBe('N ()[()');
    });
  });
});

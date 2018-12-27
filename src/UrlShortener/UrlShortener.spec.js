import UrlShortener, { MAPPING_CHARS } from './UrlShortener';

describe('UrlShortener', () => {
  describe('hashString()', () => {
    it('should return first mapping char when string is missing', () => {
      const result = UrlShortener.hashString();
      expect(result).toBe(MAPPING_CHARS[0]);
    });

    it('should return first mapping char when string is empty', () => {
      const result = UrlShortener.hashString('');
      expect(result).toBe(MAPPING_CHARS[0]);
    });

    it('should map to the same values every time', () => {
      const test = 'springboard';

      const firstResult = UrlShortener.hashString(test);
      const secondResult = UrlShortener.hashString(test);

      expect(secondResult).toBe(firstResult);
    });
  });

  describe('partitionString()', () => {
    const longTestString = 'the quick brown fox jumped over the lazy dog';

    it('should return an array with unmodified string when partitionCount is 0', () => {
      const result = UrlShortener.partitionString(longTestString, 0);
      expect(result).toEqual(expect.any(Array));

      expect(result.length).toBe(1);
      expect(result).toContain(longTestString);
    });

    it('should return an array with unmodified string when partitionCount is a negative integer', () => {
      const result = UrlShortener.partitionString(longTestString, -5);
      expect(result).toEqual(expect.any(Array));

      expect(result.length).toBe(1);
      expect(result).toContain(longTestString);
    });

    it('should return an array of substrings for every partition', () => {
      const result = UrlShortener.partitionString(longTestString, 3);
      expect(result).toEqual(expect.any(Array));

      expect(result.length).toBe(3);
      expect(result).toEqual([
        "the quick brown",
        " fox jumped ove",
        "r the lazy dog"
      ]);
    });
  });

  describe('encodeString()', () => {
    it('should return a string of the desired length', () => {
      const test = 'hello world';

      const result = UrlShortener.encodeString(test, 3);
      expect(result.length).toBe(3);
    });

    it('should prefix the result when string is shorter than the desired length', () => {

    });

    it('should return the most partitions possible when string is smaller than partition count', () => {

    });
  });

  describe('with sample input data', () => {
    const tests = [
      'https://docs.python.org/2/library/re.html#match-objects',
      'https://github.com/deeppomf/DeepCreamPy/blob/master/readme_images/',
      'https://docs.python.org/2/library/re.html#match-objects',
      'https://github.com/deeppomf/DeepCreamPy/blob/master/readme_images'
    ];

    it('should return the same output with the same input', () => {
      const [test] = tests;

      const firstResult = UrlShortener.solve(test);
      const secondResult = UrlShortener.solve(test);

      expect(secondResult).toEqual(firstResult);
    });

    it('should return the expected output', () => {
      const results = tests.map(UrlShortener.solve);

      expect(results).toEqual([
        'http://sprng.brd/6YDN2P',
        'http://sprng.brd/VPYEeC',
        'http://sprng.brd/6YDN2P',
        'http://sprng.brd/VPYEeR'
      ]);
    });
  })
});

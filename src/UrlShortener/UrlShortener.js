export const MAPPING_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const toSum = (sum, char) =>
  sum += char.charCodeAt(0);

class UrlShortener {
  static hashString(str = '') {
    if (!str) {
      return MAPPING_CHARS[0];
    }

    const charCodeSum = Array.from(str).reduce(toSum, 0);
    const offset = charCodeSum % MAPPING_CHARS.length;

    const hash = MAPPING_CHARS.charAt(offset);
    return hash;
  }

  static partitionString(string = '', length = 2) {
    if (length < 2) {
      return [string];
    }

    const isStringSmallerThanPartition = string.length < length;
    const partitionCount = isStringSmallerThanPartition ? string.length : length;

    const partitionSize = Math.ceil(string.length / partitionCount);
    const partitions = [];

    const l = string.length;
    let i = 0;

    for (; i < partitionCount; ++i) {
      const offset = i * partitionSize;
      const partition = string.substr(offset, partitionSize);
      partitions.push(partition);
    }

    return partitions;
  }

  static encodeString(string = '', length = 2) {
    const stringPartitions = UrlShortener.partitionString(string, length);
    const hashedPartitions = stringPartitions.map(UrlShortener.hashString);
    const encodedString = hashedPartitions.join('');

    if (encodedString.length < length) {
      const [firstMappingChar] = MAPPING_CHARS;
      const diff = length - encodedString.length;
      return encodedString.padStart(diff, firstMappingChar);
    }

    return encodedString;
  }

  static solve(longUrl) {
    const hash = UrlShortener.encodeString(longUrl, 6);
    return `http://sprng.brd/${hash}`;
  }
}

export default UrlShortener;

/**
 *  Hi team,
 *
 *  I chose to submit my answers in JavaScript.
 *  This means this code won't be able to run in HackerRank.
 *  I hope this is acceptable and am sorry for any inconvenience!
 *
 */

;(() => {
  const shortUrlChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  const hashString = (str) => {
    const toSum = (sum, char) =>
      sum += char.charCodeAt(0);

    const sum = Array.from(str).reduce(toSum, 0);
    const offset = sum % shortUrlChars.length;

    const hash = shortUrlChars.charAt(offset);
    return hash;
  };

  const partitionString = (url, partitionsCount) => {
    const partitionSize = Math.ceil(url.length / partitionsCount);
    const partitions = [];

    const l = url.length;
    let i = 0;

    for (; i < partitionsCount; ++i) {
      const offset = i * partitionSize;
      const partition = url.substr(offset, partitionSize);
      partitions.push(partition);
    }

    return partitions;
  };

  const hashUrl = (url, length) => {
    const urlPartitions = partitionString(url, length);
    const hashedPartitions = urlPartitions.map(hashString);
    return hashedPartitions.join('');
  };

  const getShortUrlAnswer = (longUrl) => {
    const hash = hashUrl(longUrl, 6);
    return `http://sprng.brd/${hash}`;
  };

  const tests = [
    'https://docs.python.org/2/library/re.html#match-objects',
    'https://github.com/deeppomf/DeepCreamPy/blob/master/readme_images/',
    'https://docs.python.org/2/library/re.html#match-objects',
    'https://github.com/deeppomf/DeepCreamPy/blob/master/readme_images'
  ];

  const results = tests.map(test => getShortUrlAnswer(test));
  results.forEach(result => console.log(result));

})();
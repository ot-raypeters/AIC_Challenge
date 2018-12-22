/**
 *  Hi team,
 *
 *  I chose to submit my answers in JavaScript.
 *  This means this code won't be able to run in HackerRank.
 *  I hope this is acceptable and am sorry for any inconvenience!
 *
 */

;(() => {
    const BRACKETS_MAP = {
      '{': '}',
      '(': ')',
      '[': ']'
    };

    const OPENING_BRACKETS = Object.keys(BRACKETS_MAP);
    const CLOSING_BRACKETS = Object.values(BRACKETS_MAP);
    const BRACKETS = [...OPENING_BRACKETS, ...CLOSING_BRACKETS];

    const getBracketCharacters = (str = '') =>
      Array.from(str).filter(char => BRACKETS.includes(char));

    /**
     * @note We define an expression as having balanced brackets
     * when every open bracket has a corresponding closing one
     * and vice versa.
     *
     * @question should every bracket begin with an opening bracket? e.g. `[test)(]`
     * @question is an expression balanced when it has no brackets? e.g. 'test'
     * @question is an empty string balanced? e.g. ''
     * @question is mixing brackets a valid expression `([test)]`?
     *
     */
    const getIsBalanced = (brackets) => {
      // @note brackets should come in pairs
      const hasOddNumberOfBrackets = brackets.length % 2 === 1;
      if (hasOddNumberOfBrackets) {
        return false;
      }

      // @note assuming opening brackets must come before closing brackets
      const visited = [];

      const l = brackets.length;
      let i = 0;

      for (; i < l; ++i) {
        const bracket = brackets[i];

        if (OPENING_BRACKETS.includes(bracket)) {
          visited.push(bracket);
          continue;
        }

        if (CLOSING_BRACKETS.includes(bracket)) {
          const lastVisited = visited.pop();
          const expectedClosingBracket = BRACKETS_MAP[lastVisited];

          const isValid = bracket === expectedClosingBracket;

          if (!isValid) {
            return false;
          }
        }
      }

      return true;
    }

    const getBalancedBracketsAnswer = (str = '') => {
      const matchedBrackets = getBracketCharacters(str);
      const isBalanced = getIsBalanced(matchedBrackets);

      const isBalancedMsg = isBalanced ? 'Y' : 'N';
      return `${isBalancedMsg} ${matchedBrackets.join('')}`;
    };

    const tests = [
      '[{(1+2) * (x-4)}]',
      '(1+2)*y^2[+(x*y)'
    ];

    tests.forEach((test) => {
        const result = getBalancedBracketsAnswer(test);
        console.info(`testing: "${test}"`);
        console.log(`result: "${result}"`);
    });
})();
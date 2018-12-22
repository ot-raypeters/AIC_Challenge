import {
  BRACKETS,
  OPENING_BRACKETS,
  CLOSING_BRACKETS,
  BRACKETS_MAP
} from './BracketConstants';

/**
 * @note We define an expression as having balanced brackets
 * when every open bracket has a corresponding closing one
 * and vice versa.
 *
 * @questions
 *   - should every bracket begin with an opening bracket? e.g. `[test)(]`
 *   - is an expression balanced when it has no brackets? e.g. 'test'
 *   - is mixing brackets a valid expression `([test)]`?
 *   - is an empty string balanced? e.g. ''
 */

class BalancedBrackets {
  static getBracketCharacters(str = '') {
    return Array.from(str).filter(char => BRACKETS.includes(char));
  }

  static hasBalancedBrackets(brackets = []) {
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

  static solve(str = '') {
    const matchedBrackets = BalancedBrackets.getBracketCharacters(str);
    const isBalanced = BalancedBrackets.hasBalancedBrackets(matchedBrackets);

    const isBalancedMsg = isBalanced ? 'Y' : 'N';
    return `${isBalancedMsg} ${matchedBrackets.join('')}`;
  }
}

export default BalancedBrackets;

/*
* Leetcode: Longest Valid Parentheses
* Dificuldade: Hard
* Link: https://leetcode.com/problems/longest-valid-parentheses/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (!s) return 0;

  const cache = {}

  const calc = (i) => {
    if (cache[i]) return cache[i];
    const result = (() => {
      if (i == -1 || s[i] == '(') return 0;
      if (i >= 1 && s[i - 1] == '(' && s[i] == ')') return calc(i - 2) + 2;
      const helper = i - calc(i - 1) - 1;
      if (helper >= 0 && s[helper] == '(') {
        return calc(i - 1) + calc(helper - 1) + 2;
      }
      return 0;
    })();
    cache[i] = result;
    return result;
  }

  return Math.max(...Array.from({ length: s.length }, (_, i) => calc(i)))
};

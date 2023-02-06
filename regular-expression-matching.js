/* Leetcode: regular expression matching
 * Dificuldade: Hard
 * Link: https://leetcode.com/problems/regular-expression-matching/
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) return !s;

  const cache = Array(s.length + 1).fill().map(() => Array(p.length + 1).fill(false));
  cache[0][0] = true;

  for (let j = 2; j <= p.length; j++) {
    cache[0][j] = p[j - 1] == '*' && cache[0][j - 2];
  }

  for (let j = 1; j <= p.length; j++) {
    for (let i = 1; i <= s.length; i++) {
      if (p[j - 1] == s[i - 1] || p[j - 1] == '.') {
        cache[i][j] = cache[i - 1][j - 1];
      } else if (p[j - 1] == '*') {
        cache[i][j] = cache[i][j - 2] || ((s[i - 1] == p[j - 2] || p[j - 2] == '.') && cache[i - 1][j]);
      }
    }
  }

  return cache[s.length][p.length];
};

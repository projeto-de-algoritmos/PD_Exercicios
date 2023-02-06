/*
* Leetcode: Dungeon game
* Dificuldade: Hard
* Link: https://leetcode.com/problems/dungeon-game
*/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;

  const cache = Array(m + 1).fill().map(() => Array(n + 1).fill(Infinity));
  cache[m - 1][n] = 1;
  cache[m][n - 1] = 1;

  for (let i = m - 1; i > -1; i--) {
    for (let j = n - 1; j > -1; j--) {
      cache[i][j] = Math.max(
        Math.min(cache[i + 1][j], cache[i][j + 1]) - dungeon[i][j],
        1,
      )
    }
  }

  return cache[0][0]
};

/**
 *
 * @param {Array<Array<number>>} grid - m * n grid filled with non-negative numbers
 * @returns {number} - minimal sum of all numbers along a path from top left to bottom right
 */
export default function minimumPathSum(grid) {
  const n = grid.length;
  const m = n > 0 ? grid[0].length : 0;
  const dp = grid.map(n => n.map(_ => undefined));

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < m; column++) {
      if (row === 0 && column === 0) {
        dp[row][column] = grid[row][column];
      } else {
        dp[row][column] = grid[row][column] + Math.min(
          row === 0 ? Infinity : dp[row - 1][column], column === 0 ? Infinity : dp[row][column - 1]
        );
      }
    }
  }

  console.log(grid);
  console.log(dp);

  return dp[n - 1][m - 1];
}

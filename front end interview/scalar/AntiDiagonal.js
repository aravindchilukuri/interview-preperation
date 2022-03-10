module.exports = {
  diagonal: function (A) {
    let n = A.length;
    let ans = new Array(2 * n - 1);

    for (let i = 0; i < 2 * n - 1; i++) ans[i] = [];

    for (let i = 0; i < 2 * n - 1; i++) {
      for (let j = 0; j < n; j++) ans[i][j] = 0;
    }

    for (let i = 0; i < n; i++) {
      let x = 0,
        y = i,
        pos = 0;
      while (y >= 0) {
        ans[i][pos++] = A[x][y];

        x++;
        y--;
      }
    }

    for (let i = n; i < 2 * n; i++) {
      let x = i - n + 1,
        y = n - 1,
        pos = 0;
      while (x < n) {
        ans[i][pos++] = A[x][y];

        x++;
        y--;
      }
    }
    return ans;
  },
};

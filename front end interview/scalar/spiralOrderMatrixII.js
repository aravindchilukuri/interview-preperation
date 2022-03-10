function spiralOrder(A) {
  // t == r || l === c    row === r  col == b
  let r = 0;
  let c = 0;
  let row = A - 1;
  let col = A - 1;
  let d = 0;
  let count = 1;
  let a = [];
  for (let k = 0; k < A - 1; k++) {
    a[k] = [];
  }
  a = [...Array(row)].map((x) => Array(col).fill(0));

  while (c <= col && r <= row) {
    if (d == 0) {
      for (let i = c; i <= row; i++) {
        a[r][i] = count;
        count++;
      }
      d = 1;
      r++;
    } else if (d == 1) {
      for (let i = r; i <= col; i++) {
        a[i][row] = count;
        count++;
      }
      d = 2;
      row--;
    } else if (d == 2) {
      for (let i = row; i >= c; i--) {
        a[col][i] = count;
        count++;
      }
      d = 3;
      col--;
    } else if (d == 3) {
      for (let i = col; i >= r; i--) {
        a[i][c] = count;
        count++;
      }
      d = 0;
      c++;
    }
  }
  return a;
}

console.log(spiralOrder(3));

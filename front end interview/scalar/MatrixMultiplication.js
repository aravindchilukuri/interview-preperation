function matrixMul(A) {
  let row = A.length;
  let c = [];
  let col = A[0].length;
  let colB = B[0].length;
  c = [...Array(row)].map((x) => Array(colB).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < colB; j++) {
      c[i][j] = [0, 0];
      for (let k = 0; k < col; k++) {
        c[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return c;
}

function matrixScalerProduct(A, B) {
  let row = A.length;
  let col = A[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      A[i][j] = A[i][j] * B;
    }
  }
  return A;
}

A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
B = 2;

console.log(matrixScalerProduct(A, B));

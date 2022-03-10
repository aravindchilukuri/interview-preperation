function maxSumSquareSubMatrix(A, B) {
  sum = 0;
  for (let i = 0; i < A.length; i++) {
    for (j = i; j < A[i].length; j++) {
      for (k = i; k < B; k++) {
        sum = Math.max(sum, A[j][k] * (j + 1) * (k + 1) * (B - j) * (B - k));
      }
    }
  }
  return sum;
}

A = [
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [3, 8, 6, 7, 3],
  [4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5],
];
B = 3;

// A = [
//   [2, 2],
//   [2, 2],
// ];
// B = 2;

console.log(maxSumSquareSubMatrix(A, B));

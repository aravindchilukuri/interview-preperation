// function rotateMatrix(A) {
//   for (i = 0; i < A.length; i++) {
//     for (j = i + 1; j < A.length; j++) {
//       let temp = A[i][j];
//       A[i][j] = A[j][i];
//       A[j][i] = temp;
//     }
//   }
//   let n = A[0].length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n / 2; j++) {
//       var t = A[i][j];
//       A[i][j] = A[i][n - j - 1];
//       A[i][n - j - 1] = t;
//     }
//   }
//   return A;
// }

function rotateMatrix(A) {
  A = A.reverse();
  console.log(A);
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = A[i][j];
      A[i][j] = A[j][i];
      A[j][i] = temp;
    }
  }
  return A;
}

A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateMatrix(A));

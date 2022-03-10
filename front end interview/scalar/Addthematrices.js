// function addTheMatrices(A, B) {
//   let row = A.length;
//   let col = A[0].length;
//   let sum = [[], []];
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       sum[i][j] = A[i][j] + B[i][j];
//     }
//   }
//   console.log(sum);
// }

// console.log(
//   addTheMatrices(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     [
//       [9, 8, 7],
//       [6, 5, 4],
//       [3, 2, 1],
//     ]
//   )
// );

function addTheMatrices(A, B) {
  let c = [];
  for (let k = 0; k < A.length; k++) {
    c[k] = [];
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      c[i][j] = A[i][j] + B[i][j];
    }
  }
  return c;
}

A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
B = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

addTheMatrices(A, B);

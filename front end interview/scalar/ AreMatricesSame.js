function sameMatrix(A, B) {
  let row = A.length;
  let col = A[0].length;
  if (A.length == B.length && A[0].length == B[0].length) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (A[i][j] != B[i][j]) {
          return 0;
        }
      }
    }
    return 1;
  } else {
    return 0;
  }
}

A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
B = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sameMatrix(A, B));

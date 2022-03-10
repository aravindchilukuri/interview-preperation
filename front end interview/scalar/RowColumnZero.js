function rowColumnZero(A) {
  let temp = [];
  let row = A.length;
  let col = A[0].length;
  let i, j;
  temp = [...Array(row).map((x) => Array(col).fill(1))];
  for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      if (A[i][j] == 0) {
        for (let k = 0; k < row; k++) {
          temp[k][j] = 0;
        }
        for (let l = 0; l < col; l++) {
          temp[i][l] = 0;
        }
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      A[i][j] = temp[i][j];
    }
  }
  return A;
}

let C = [
  [1, 2, 3, 4],
  [5, 6, 7, 0],
  [9, 2, 0, 4],
];

console.log(rowColumnZero(C));

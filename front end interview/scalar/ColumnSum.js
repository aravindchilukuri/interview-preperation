function columnSum(A) {
  let row = A.length;
  let col = A[0].length;
  let sum;
  let value = [];

  for (let i = 0; i < row; i++) {
    sum = 0;
    for (let j = 0; j < col; j++) {
      sum += A[i][j];
    }
    value.push(sum);
  }
  return value;
}

A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 2, 3, 4],
];
console.log(columnSum(A));

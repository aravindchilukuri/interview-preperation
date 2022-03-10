function transpose(A) {
  const result = [];
  for (i = 0; i < A[0].length; i++) {
    const col = [];
    for (j = 0; j < A.length; j++) {
      col.push(A[j][i]);
    }
    result.push(col);
  }
  return result;
}

A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(A));

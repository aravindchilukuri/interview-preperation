function minorDiagonal(A) {
  let i = 0;
  let N = A.length;
  let j = N - 1;
  let temp = 0;
  while (i <= N - 1 && j >= 0) {
    /// major while i<N
    temp += A[i][j];

    i++;
    j--;
  }
  return temp;
}
A = [
  [1, -2, -3],
  [-4, 5, -6],
  [-7, -8, 9],
];
console.log(minorDiagonal(A));

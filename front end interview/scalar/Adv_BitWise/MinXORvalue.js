function minXORValue(A) {
  result = Infinity;
  //   A.sort((a, b) => {
  //     return a - b;
  //   });
  for (let i = 0; i < A.length; i++) {
    result = Math.min(result, A[i] ^ A[i + 1]);
  }
  return result;
}
A = [0, 2, 5, 7];

console.log(minXORValue(A));

function productArrayPuzzle(A) {
  let n = A.length;
  let mul = A[0];
  for (let i = 1; i < A.length; i++) {
    mul = mul * A[i];
  }
  for (let i = 0; i < n; i++) {
    A[i] = mul / A[i];
  }
  return A;
}

console.log(productArrayPuzzle([1, 2, 3]));

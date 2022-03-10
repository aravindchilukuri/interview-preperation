function bitCompression(A) {
  let value = 0;
  for (let i = 0; i < A.length; i++) {
    value = value ^ A[i];
  }
  return A;
}

A = [1, 3, 5];
console.log(bitCompression(A));

A = [5, 5, 5, 5, 5];

function value(A) {
  A.sort((a, b) => a - b);
  for (let i = A.length - 2; i >= 0; i--) {
    if (A[i] != A[A.length - 1]) {
      return A[i] % A[A.length - 1];
    }
  }
  return 0;
}

console.log(value(A));

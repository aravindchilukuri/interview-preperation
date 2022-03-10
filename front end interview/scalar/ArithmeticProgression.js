function canBeArithmetic(A) {
  if (A.length == 1) return 1;
  A.sort((a, b) => {
    return a - b;
  });
  let d = A[1] - A[0];

  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] != d) {
      return 0;
    }
  }
  return 1;
}

1, 3, 5;
A = [3, 5, 1];
console.log(canBeArithmetic(A));

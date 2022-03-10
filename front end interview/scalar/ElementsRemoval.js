function removalCost(A) {
  A.sort((a, b) => b - a);
  total = 0;
  for (let i = 0; i < A.length; i++) {
    total += A[i] * (i + 1);
  }
  return total;
}

A = [2, 1];
console.log(removalCost(A));

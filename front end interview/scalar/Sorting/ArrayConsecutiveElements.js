function ArrayConsecutive(A) {
  A.sort((a, b) => a - b);
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] + 1 != A[i]) {
      return 0;
    }
  }
  return 1;
}
A = [1, 3, 2, 5];
console.log(ArrayConsecutive(A));

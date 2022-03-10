function inversionCount(A) {
  count = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (i < j && A[i] > A[j]) {
        count++;
      }
    }
  }
  return count;
}
A = [3, 2, 1];

console.log(inversionCount(A));

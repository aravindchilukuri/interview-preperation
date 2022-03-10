function periodOfString(A) {
  let k = 1;
  let i = 0;
  while (i < A.length) {
    if (A[i] == A[i % k]) {
      i++;
    } else if (k != i) {
      k = i;
    } else {
      i++;
      k = i;
    }
  }
  return k;
}

A = "abababab";
console.log(periodOfString(A));

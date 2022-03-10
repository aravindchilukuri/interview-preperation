function mergeSortedArray(A, B) {
  let n = A.length;
  let m = B.length;
  [i, j, k] = [0, 0, 0];
  let c = [];
  while (i < n && j < m) {
    if (A[i] < B[j]) {
      c[k] = A[i];
      i += 1;
    } else {
      c[k] = B[j];
      j += 1;
    }
    k += 1;
  }
  while (i < n) {
    c[k] = A[i];
    i += 1;
    k += 1;
  }

  while (j < m) {
    c[k] = B[j];
    j += 1;
    k += 1;
  }
  return c;
}

A = [4, 7, 9];
B = [2, 11, 19];

console.log(mergeSortedArray(A, B));

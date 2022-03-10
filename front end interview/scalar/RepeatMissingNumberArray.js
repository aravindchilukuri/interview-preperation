function repeatMissingArray(A) {
  let res = A[0];
  let n = A.length;
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < A.length; i++) {
    res = res ^ A[i];
    total -= A[i];
  }
  A.splice(0, A.length);
  let newArray = [res, total];
  A.push(...newArray);
  return A;
}

A = [3, 1, 2, 5, 3];

console.log(repeatMissingArray(A));

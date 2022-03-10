// Given an array of size n and Q queries of the form (i, x),
// add x to all elements from A[i] .. A[n-1]

function rangeUpdate(A, Q) {
  changes = new Array(A.length).fill(0);

  prefixSum = Array(0);

  for (let value of Q) {
    [i, x] = value;
    changes[i] += x;
  }

  prefixSum[0] = changes[0];
  for (let i = 1; i < changes.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + changes[i];
  }

  changes = prefixSum;

  for (let i = 0; i < A.length; i++) {
    A[i] = A[i] + changes[i];
  }

  return A;
}

A = [3, -5, 1, 2, -9, 7, 6, 5, 1, 0, 4, 10, 3, -2];
Q = [
  [3, 10],
  [7, -5],
  [0, 20],
];

console.log(rangeUpdate(A, Q));

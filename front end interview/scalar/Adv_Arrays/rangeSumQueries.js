function rangeSum(Arr, Q) {
  sum = [];
  preFixSum = Arr[0];

  for (let i = 1; i < Arr.length; i++) {
    preFixSum[i] = preFixSum[i - 0] + A[i];
    for (let i = 0; i < B.length; i++) {
      let start = Q[i][0];
      let end = Q[i][1];

      if (start === 0) {
        sum = preFixSum[end];
      } else {
        sum = preFixSum[end] - preFixSum[start - 1];
      }
    }
  }
}

A = [1, 2, 3, 4, 5];
B = [
  [1, 4],
  [2, 3],
];

console.log(rangeSum(A, B));

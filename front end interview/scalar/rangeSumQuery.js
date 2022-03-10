function rangeSumQuery(A, B) {
  let sum = [];

  let PreFixSum = new Array();
  PreFixSum[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    PreFixSum[i] = PreFixSum[i - 1] + A[i];
  }
  for (let i = 0; i < B.length; i++) {
    let start = B[i][0];
    let end = B[i][1];
    if (start == 0) {
      sum.push(PreFixSum[end]);
    } else {
      sum.push(PreFixSum[end] - PreFixSum[start - 1]);
    }
  }
  return sum;
}

console.log(
  rangeSumQuery(
    [1, 2, 3, 4, 5],
    [
      [1, 4],
      [2, 3],
    ]
  )
);

[1, 2], [1, 3];

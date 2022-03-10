function beggerProblem(A, B) {
  res = new Array(A).fill(0);

  for (let i = 0; i < B.length; i++) {
    let startIndex = B[i][0];
    res[startIndex - 1] += B[i][2];

    endIndex = B[i][1];
    endIndex -= 1;

    if (endIndex != A - 1) {
      res[endIndex + 1] -= B[i][2];
    }
  }
  sum = 0;
  for (let i = 0; i < res.length; i++) {
    sum += res[i];
    res[i] = sum;
  }
  return res;
}

A = 5;
B = [
  [1, 2, 10],
  [2, 3, 20],
  [2, 5, 25],
];

console.log(beggerProblem(A, B));

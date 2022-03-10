function subArray(A) {
  prev_sum = new Set();
  sum = 0;
  for (let x of A) {
    sum += x;
    if (sum == 0) {
      return 1;
    }
    if (prev_sum.has(sum)) {
      return 1;
    }
    prev_sum.add(sum);
    console.log(prev_sum, "prev");
  }
  return 0;
}

A = [-1, 2, 1, -2];

console.log(subArray(A));

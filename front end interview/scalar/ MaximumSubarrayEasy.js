function MaxSubArray(A, B, C) {
  let maxValue = 0;
  for (let start = 0; start < A; start++) {
    let sum = BigInt(0); // 0n
    for (let end = start; end < A; end++) {
      sum += BigInt(C[end]);
      if (maxValue < sum && sum <= B) {
        maxValue = Number(sum);
      } else if (sum > B) {
        break;
      }
    }
  }
  return maxValue;
}

console.log(MaxSubArray((A = 5), (B = 12), (C = [2, 1, 3, 4, 5])));

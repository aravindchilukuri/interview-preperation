function pickFromBothSides(A, B) {
  let n = A.length;
  let suff = Array(0);
  suff[n] = 0;
  suff[n - 1] = A[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suff[i] = A[i] + suff[i + 1];
  }
  let preFixSum = 0;
  let ans = suff[n - B];
  for (let i = 0; i < B; i++) {
    preFixSum += A[i];
    let suff_sum = suff[n - B + (i + 1)];
    ans = Math.max(ans, preFixSum + suff_sum);
  }
  return ans;
}

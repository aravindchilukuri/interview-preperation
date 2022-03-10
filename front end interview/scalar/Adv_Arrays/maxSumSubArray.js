function maxSumSubArray(A) {
  ans = -Infinity;
  sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    ans = Math.max(ans, sum);
    sum = Math.max(0, sum);
  }
  return ans;
}

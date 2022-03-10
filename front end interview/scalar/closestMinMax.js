function closetMinMax(A) {
  let iMin = -1;
  let iMax = -1;
  let length;
  let ans = A.length;
  minValue = Math.min(...A);
  maxValue = Math.max(...A);

  if (minValue == maxValue) {
    return 1;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] == minValue) {
      iMin = i;
    } else if (A[i] == maxValue) {
      iMax = i;
    }
    if (iMin > -1 && iMax > -1) {
      //  iMin >= 0 && iMax >= 0

      length = Math.abs(iMax - iMin) + 1;
      ans = Math.min(length, ans);
    }
  }
  return ans;
}

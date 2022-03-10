// You are given an array of N integers, A1, A2, …. AN.

// Return the maximum value of f(i, j) for all 1 ≤ i, j ≤ N. f(i, j) is defined as
//  |A[i] - A[j]| + |i - j|, where |x| denotes absolute value of x.
function maximumAbsolute(A) {
  let minB = +Infinity;
  let maxB = -Infinity;
  let minC = +Infinity;
  let maxC = -Infinity;

  for (let i = 0; i < A.length; i++) {
    minB = Math.min(minB, A[i] + i);
    maxB = Math.max(maxB, A[i] + i);
    minC = Math.min(minC, A[i] - i);
    maxC = Math.max(maxC, A[i] - i);
  }
  ans1 = maxB - minB;
  ans2 = maxC - minC;
  return Math.max(ans1, ans2);
}

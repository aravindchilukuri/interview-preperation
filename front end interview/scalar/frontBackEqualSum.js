function leftRightEquilibrium(A, B) {
  let sum = 0;
  let n = A.length;
  let maxSum = 0;
  for (let i = 0; i < B; i++) {
    sum += A[i];
  }
  maxSum = sum;
  let k = n - 1;
  for (let i = B - 1; i >= 0; i--) {
    sum = sum + A[k] - A[i];
    maxSum = Math.max(sum, maxSum);
    k--;
  }

  return maxSum;
}

console.log(leftRightEquilibrium([5, -2, 3, 1, 2], 3));

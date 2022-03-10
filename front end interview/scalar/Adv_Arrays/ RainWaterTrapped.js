function rainWaterTrapper(A) {
  preFixMax = Array(0);
  postFixMax = Array(0);
  preFixMax[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    preFixMax[i] = Math.max(preFixMax[i - 1], A[i]);
  }
  postFixMax[A.length - 1] = A[A.length - 1];

  for (let i = A.length - 2; i >= 0; i--) {
    postFixMax[i] = Math.max(postFixMax[i + 1], A[i]);
  }

  water = 0;
  for (let i = 0; i < A.length; i++) {
    water += Math.min(preFixMax[i], postFixMax[i]) - A[i];
  }

  return water;
}

A = [1, 2];

console.log(rainWaterTrapper(A));

function Subarraywithleastaverage(A, B) {
  let sum = 0;
  let index = 0;

  for (let i = 0; i < B; i++) {
    sum += A[i];
  }
  let maxSum = sum;
  for (let end = B; end < A.length; end++) {
    sum += A[end] - A[end - B];
    if (maxSum > sum) {
      maxSum = sum;
      index = end - B + 1;
    }
  }
  return index;
}

Subarraywithleastaverage((A = [3, 7, 5, 20, -10, 0, 12]), (B = 2));

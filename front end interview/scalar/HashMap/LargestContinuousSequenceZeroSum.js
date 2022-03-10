function largestContinuousSequence(A) {
  let first_seen_at = new Map();
  let result = [];
  best_length = -1;
  best_start = -1;
  best_end = -1;
  first_seen_at.set(0, -1);
  length_val = 0;
  sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (first_seen_at.has(sum)) {
      length_val = i - first_seen_at.get(sum);
    }
    if (length_val > best_length) {
      best_length = length_val;
      best_start = first_seen_at.get(sum) + 1;
      best_end = i;
    } else {
      first_seen_at.set(sum, i);
    }
  }
  for (let i = best_start; i <= best_end; i++) {
    result.push(A[i]);
  }
  return result;
}

A = [1, 2, -2, 4, -4];

console.log(largestContinuousSequence(A));

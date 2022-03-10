function subArrayWithZeroSum(A) {
  let seen = new Map();
  sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum === 0 || seen.has(sum)) return true;
    seen.set(sum, i);
  }
  return false;
}
A = [-1, 1];

console.log(subArrayWithZeroSum(A));

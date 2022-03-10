function bulbsValue(A) {
  let state = 0;
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == state) {
      ans++;
      state = 1 - state;
    }
  }

  return ans;
}

console.log(bulbsValue([1, 1, 0, 0, 1, 1, 0, 0, 1]));

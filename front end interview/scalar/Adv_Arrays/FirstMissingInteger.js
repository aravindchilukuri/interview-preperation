function missingInteger(nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let ans = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == ans) ans++;
  }
  return ans;
}

A = [1, 2, 0];

console.log(missingInteger(A));

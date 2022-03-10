function maxNonNegativeSubArrays(nums) {
  //   sum = 0;
  //   value = -Infinity;
  //   result = [];
  //   for (let i = 0; i < A.length; i++) {
  //     sum += A[i];
  //     value = Math.max(sum, value);
  //     sum = Math.max(0, sum);

  //   }
  //   return result;

  //   Initialize currMax and globalMax
  // with first value of nums
  result = [];
  let currMax = nums[0];
  let globalMax = nums[0];
  // Initialize endIndex startIndex,globalStartIndex
  let endIndex = 0;
  let startIndex = 0,
    globalMaxStartIndex = 0;

  // Iterate for all the elements of the array
  for (let i = 1; i < nums.length; ++i) {
    // Update currMax and startIndex
    if (nums[i] > nums[i] + currMax) {
      currMax = nums[i];
      startIndex = i; // update the new startIndex
    }

    // Update currMax
    else if (nums[i] < nums[i] + currMax) {
      currMax = nums[i] + currMax;
    }

    // Update globalMax and globalMaxStartIndex
    if (currMax > globalMax) {
      globalMax = currMax;
      endIndex = i;
      globalMaxStartIndex = startIndex;
    }
  }
  for (let i = globalMaxStartIndex; i <= endIndex; i++) {
    if (A[i] >= 0) {
      result.push(A[i]);
    }
  }
  return result;
}

A = [0, 0, -1, 0];

console.log(maxNonNegativeSubArrays(A));

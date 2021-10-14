function max_sum(arr, num) {
  if (arr.length < num) {
    return null;
  }
  var max = -Infinity;
  for (i = 0; i < arr.length - num; i++) {
    temp = 0;
    for (j = 0; j < num; j++) {
      temp = arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

// max_sum([2,2,4,4,6,1,8,9],3)

/* sliding window */
/*  here it will traverse in a single loop and munis the last digit for adding 
nxt elements*/
function max_sum_refactor(arr, num) {
  if (arr.length < num) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum,tempSum)
  }
  return maxSum;
  
}

console .log(max_sum_refactor([2,2,4,4,6,1,8,9],3))
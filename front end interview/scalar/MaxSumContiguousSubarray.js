function maxSumContiguousSubArray(Arr) {
  let maxValue = -Infinity;
  //   for (let start = 0; start < Arr.length; start++) {
  //     let sum = 0;
  //     for (let end = start; end < Arr.length; end++) {
  //       sum += Arr[end];
  //       if (sum > maxValue) {
  //         maxValue = sum;
  //       }
  //     }
  //   }
  let sum = 0;
  for (let i = 0; i < Arr.length; i++) {
    sum = Math.max(Arr[i], sum + Arr[i]);
    maxValue = Math.max(maxValue, sum);
  }
  return maxValue;
}

console.log(maxSumContiguousSubArray([1, 2, 3, 4, -10]));

function maxSubarraySum(arr,num) {
    if(arr.length < num) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0;i < num;i++) {
        tempSum += arr[i]
    }
    tempSum = maxSum;

    for(let i = 0;i < arr.length;i++) {
        tempSum = tempSum - arr[i-num] + a[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}
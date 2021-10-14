function sumRangeRecursive(sum) {
    if(sum === 1) {
        return 1;
    }
    return sum + sumRangeRecursive(sum-1);
}

console.log(sumRangeRecursive(4))
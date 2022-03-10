function UniqueNumbers2(arr) {
  let sum = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // Xor  all the elements of the array
    // all the elements occurring twice will
    // cancel out each other remaining
    // two unique numbers will be xored
    sum = sum ^ arr[i];
  }

  // Bitwise & the sum with it's 2's Complement
  // Bitwise & will give us the sum containing
  // only the rightmost set bit
  sum = sum & -sum;

  // sum1 and sum2 will contains 2 unique
  // elements initialized with 0 box
  // number xored with 0 is number itself
  let sum1 = 0;
  let sum2 = 0;

  // Traversing the array again
  for (let i = 0; i < arr.length; i++) {
    // Bitwise & the arr[i] with the sum
    // Two possibilities either result == 0
    // or result > 0
    if ((arr[i] & sum) > 0) {
      // If result > 0 then arr[i] xored
      // with the sum1
      sum1 = sum1 ^ arr[i];
    } else {
      // If result == 0 then arr[i]
      // xored with sum2
      sum2 = sum2 ^ arr[i];
    }
  }
  result.push(sum1, sum2);
  result.sort((a, b) => {
    return a - b;
  });
  return result;
}
A = [1, 2, 3, 1, 2, 4];
console.log(UniqueNumbers2(A));

//scaler homework problem

// function right_rotate_array(arr, k) {
//   let value = arr.reverse();
//   let n = value.length;
//   for (let i = 0; i < Math.floor(); i++) {
//     let temp = value[i];
//     value[i] = value[k - i - 1];
//     value[k - i - 1] = temp;
//   }
//   console.log(value);
//   for (let j = k; j < n; j++) {
//     let tempValue = value[j];
//     value[j] = value[n - j - 1];
//     value[n - j - 1] = tempValue;
//   }
//   return value;
// }

// console.log(right_rotate_array([1, 2, 3, 4, 5, 6], 9));

function maxMinArray(A) {
  let max = A[0];
  let min = A[0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }
  for (let j = 1; j < A.length; j++) {
    if (A[j] < min) {
      min = A[j];
    }
  }
  return [max, min];
}

console.log(maxMinArray([1, 2, 3, 4, 5, 6]));

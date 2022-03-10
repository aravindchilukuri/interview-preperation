A = 5;
B = [0, 1, 1, 0, 1];

function subArrays(A, B) {
  let count = 0;
  let result = 0;
  let finalValue;
  let totalSubarray = (A * (A + 1)) / 2;
  for (let i = 0; i < A; i++) {
    if (B[i] == 0) {
      count++;
    } else if (B[i] == 1) {
      result += (count * (count + 1)) / 2;
      count = 0;
    }
  }
  result += (count * (count + 1)) / 2;
  finalValue = totalSubarray - result;
  return finalValue;
}

//   finalValue = totalSubarray - result;
//   return finalValue;
// }

// function subArrays(A, B) {
//   let sum = 0;

//   for (let start = 0; start < A; start++) {
//     sum += (start + 1) * (A - start) * B[start];
//   }
//   return sum;
// }

// function subArrays(A, B) {
//   let sum = 0;
//   for (let start = 0; start < A; start++) {
//     sum += (start + 1) * (A - start) * B[start];
//   }
//   return sum;
// }
console.log(subArrays(A, B));

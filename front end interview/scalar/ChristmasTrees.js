// function christmasTree(A, B) {
//   let temp = Infinity;
//   let result = Infinity;
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] < A[j]) {
//         for (let k = j + 1; k < A.length; k++) {
//           if (A[j] < A[k]) {
//             temp = B[i] + B[j] + B[k];
//             result = Math.min(result, temp);
//           }
//         }
//       }
//     }
//   }
//   if (result < Infinity) {
//     return result;
//   } else {
//     return -1;
//   }
// }

// --------------------

function christmasTree(A, B) {
  let result = 1e9;
  for (let i = 0; i < A.length; i++) {
    let left_value = 1e9;
    let right_value = 1e9;

    let sum = 0;
    for (let j = 0; j < i; j++) {
      if (A[i] > A[j]) {
        left_value = Math.min(B[j], left_value);
      }
    }
    if (left_value == 1e9) {
      continue;
    } else {
      sum += left_value;
    }
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] < A[j]) {
        right_value = Math.min(B[j], right_value);
      }
    }
    if (right_value == 1e9) {
      continue;
    } else {
      sum += right_value;
    }
    sum += B[i];
    result = Math.min(sum, result);
  }
  if (result == 1e9) {
    return -1;
  } else {
    return result;
  }
}

A = [5, 9, 10, 4, 7, 8];
B = [5, 6, 4, 7, 2, 5];

console.log(christmasTree(A, B));

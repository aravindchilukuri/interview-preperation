// function MaximumPositivity(A) {
//   value = [];
//   for (let start = 0; start < A.length; start++) {
//     for (let end = start; end < A.length; end++) {
//       console.log("subarray from " + start + " to " + end + " is");
//       result = [];
//       for (let i = start; i <= end; i++) {
//         if (A[i] < 0) break;
//         result.push(A[i]);
//       }
//       console.log(result);
//       temp = 0;
//       if (result) {
//         temp = Math.max(temp, result.length);
//         console.log(temp, "temp");
//       }
//     }
//   }
// }

function MaximumPositivity(A) {
  let start,
    count,
    temp_count,
    temp_start,
    j = 0;

  while (j < A.length) {
    if (temp_start == 0 && temp_count == 0) {
      temp_start = j;
    }
    if (A[j] > 0) {
      temp_count++;
    } else {
      temp_start = 0;
      temp_count = 0;
    }
    if (temp_count > count) {
      start = temp_start;
      count = temp_count;
    }
    j++;
  }
  let maxSize = [];

  for (let i = 0; i < count; i++) {
    maxSize[i] = A[start];
    start++;
  }
  return maxSize;
}

A = [5, 6, -1, 7, 8];

MaximumPositivity(A);

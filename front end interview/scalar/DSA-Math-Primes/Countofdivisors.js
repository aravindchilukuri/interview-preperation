// function countDivisors(arr) {
//   spf = [...Array(Math.max(...arr)).keys()];
//   console.log(spf);
//   let result = new Array(0);
//   for (let i = 0; i < arr.length; i++) {
//     if (is_Prime(arr[i])) {
//       result.push(2);
//     } else {
//       let count = 0;
//       while (arr[i]) {
//         arr[i] /= spf[arr[i]];
//         count++;
//       }
//       result.push(count);
//     }
//   }
//   return result;
// }

// function is_Prime(val) {
//   if (val === 1) return false;
//   for (let i = 2; i * i <= val; i++) {
//     if (val % i === 0) {
//       return false;
//     }
//     return true;
//   }
// }

function countDivisors(A) {
  let max = Math.max(...A);
  let divisor_array = new Array(max + 1).fill(2, 2);
  divisor_array[1] = 1;
  divisor_array[0] = 1;

  for (let i = 2; i < divisor_array.length; i++) {
    for (let l = i + i; l < divisor_array.length; l += i) {
      divisor_array[l] += 1;
    }
  }
  for (let i = 0; i < A.length; i++) {
    A[i] = divisor_array[A[i]];
  }
  return A;
}

A = [2, 3, 4, 5];
console.log(countDivisors(A));

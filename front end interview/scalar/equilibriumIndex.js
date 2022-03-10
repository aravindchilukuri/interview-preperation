// function equilibriumIndex(A) {
//   for (let i = 0; i < A.length; i++) {
//     let left = 0;
//     for (let j = 0; j < i; j++) {
//       left += A[j];
//     }
//     let right = 0;
//     for (let j = i + 1; j < A.length; j++) {
//       right += A[j];
//     }
//     if (left == right) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]));

function sumArray(A) {
  let PS = new Array();
  PS[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    PS[i] = PS[i - 1] + A[i];
  }
  //   for(let i = 0; i < )
}

// let n = A.length;
// function EvenOddIndexSum(A, n) {
//   let n = A.length;
//   if (n == 1) {
//     return 1;
//   }
//   if (n == 2) {
//     return 0;
//   }
//   let sumEven = 0;
//   let sumOdd = 0;
//   for (let i = 0; i < n; i++) {
//     if (i % 2 == 0) {
//       sumEven += A[i];
//     } else {
//       sumOdd += A[i];
//     }
//   }
//   let currOdd = 0;
//   let currEven = 0;
//   let res = 0;
//   let newEvenSum = 0;
//   let newOddSum = 0;
//   for (let i = 1; i < n - 1; i++) {
//     if (i % 2) {
//       currOdd += A[i];
//       newEvenSum = currEven + sumOdd - currOdd;
//       newOddSum = currOdd + sumEven - currEven - A[i];
//     } else {
//       currEven += A[i];
//       newOddSum = currOdd + sumEven - currEven;
//       newEvenSum = currEven + sumOdd - currOdd - A[i];
//     }
//     if (newEvenSum == newOddSum) {
//       res++;
//     }
//   }
//   if (sumOdd == sumEven - A[0]) {
//     res++;
//   }
//   if (n % 2 == 1) {
//     if (sumOdd == sumEven - A[n - 1]) {
//       res++;
//     }
//   } else {
//     if (sumEven == sumOdd - A[n - 1]) {
//       res++;
//     }
//   }
//   return res;
// }

// console.log(EvenOddIndexSum(A, n));

let arr = [2, 1, 6, 4];

console.log(cntIndexesToMakeBalance(arr));

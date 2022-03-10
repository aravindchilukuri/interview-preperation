function secondLargest(A) {
  let first = 0;
  let n = A.length;
  let second = -1;
  for (let i = 0; i < n; i++) {
    if (A[i] > A[first]) {
      first = i;
    }
  }
  for (let i = 0; i < n; i++) {
    if (i != first && A[i] > second) {
      second = A[i];
    }
  }
  return Number(second);
}

console.log(secondLargest([2]));

// function MaxEvenMinOdd(A) {
//   let Even = [];
//   let odd = [];
//   for (i = 0; i < A.length; i++) {
//     if (A[i] % 2 === 0) {
//       Even.push(A[i]);
//     } else {
//       odd.push(A[i]);
//     }
//   }
//   const evenValue = Math.max(...Even);
//   const oddValue = Math.min(...odd);

//   return evenValue - oddValue;
// }

// console.log(MaxEvenMinOdd([74, 9, 51, 51, 75, 0, 35, 89, 96, 77]));

// function singleNumber(A) {
//   M = A.length;
//   N = A.length - 1;
//   count = 0;
//   while (M >= 0) {
//     if (A[N] == A[N--]) {
//       count++;
//     }
//     if (count < 2) {
//       return A[N];
//     }
//     M--;
//   }
// }

//-----

function singleNumber(A) {
  let res = A[0];
  for (let i = 1; i < A.length; i++) res = res ^ A[i];
  value = Number(res);
  return value;
}

A = [1, 2, 2];

console.log(singleNumber(A));

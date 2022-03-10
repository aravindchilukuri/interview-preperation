// function DifferentBitSumPair(A) {
//   xor = 0;
//   for (let i = 0; i < 32; i++) {
//     count = 0;
//     for (let i = 0; i < A.length; i++) {
//       for (let j = i; j < A.length; j++) {
//         xor = A[i] ^ A[j];
//         while (xor) {
//           count += xor & 1;
//           xor >>= 1;
//         }
//       }
//     }
//   }
//   return count;
// }

function differPairs(A) {
  xor = 0;
  for (let i = 0; i < 32; i++) {
    count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] & (1 << i)) {
        count++;
      }
    }
    xor += count * (A.length - count) * 2;
  }
  return xor % (1e9 + 7);
}
A = [1, 3, 5];

console.log(DifferentBitSumPair(A));

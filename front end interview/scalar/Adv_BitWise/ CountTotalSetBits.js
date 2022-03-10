function countTotalSet(A) {
  let totalSetBit = 0;
  for (let i = 31; i >= 0; i--) {
    // console.log("a");
    if (A & (1 << i)) {
      totalSetBit += i * (1 << (i - 1)) + A - (1 << i) + 1;
      A -= 1 << i;
    }
  }
  return totalSetBit % (1e9 + 7);
}
// console.log("a");
console.log(countTotalSet(4));

//   let mod = 1000000007;
//   let totalSetBit = 0;
//   let msb = getFirstSetBitIndex(A);

//   for (let i = msb; i >= 0; i--) {
//     let pow = 1 << i;
//   }

// function getFirstSetBitIndex(A) {
//   for (let i = 32; i >= 0; i--) {
//     if ((1 << i) & (A > 0)) {
//       return i;
//     }
//   }
//   return -1;
// }

function amazingSubString(A) {
  let mod = 10003;
  N = A.length;
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < N; i++) {
    if (vowels.includes(A[i])) {
      count += N - i;
    }
  }
  return count % mod;
}
S = "String";

// function vowel(A) {
//   let res = true;
//   switch (A) {
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case "i":
//     case "I":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//       res = true;
//       break;
//     default:
//       res = false;
//       break;
//   }
//   return res;
// }

S = "ABEC";

console.log(amazingSubString(S));

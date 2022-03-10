// function countOccurrence(A) {
//   let match = "bob";
//   lengthOfMatch = match.length;
//   let count = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A.slice(i, i + lengthOfMatch) === match) {
//       count++;
//     }
//   }
//   return count;
// }

function stringOperations(A) {
  A = A + A;
  A = A.replace(/[^a-z]/g, "");
  A = A.replace(/[aeiou]/gi, "#");
  return A;
}

A = "hgUe";
console.log(stringOperations(A));

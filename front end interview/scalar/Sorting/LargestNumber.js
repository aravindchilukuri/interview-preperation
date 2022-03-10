// function largestNumber(A) {
//   //   const value = A.map((el) => {
//   //     return JSON.stringify(el);
//   //   });

//   //   let res = [...value];
//   //   console.log(res);
//   let value = JSON.stringify(A.join("")).split("");
//   let digits = value.map(Number);
//   return digits;
// }

//param A : array of integers
//return a strings
function largestNumber(A) {
  A.sort((a, b) => {
    if (Number("" + a + b) > Number("" + b + a)) {
      return -1;
    }
    return 0;
  });
  console.log(A);

  return A[0] == 0 ? "0" : A.join("");
}

A = [3, 30, 34, 5, 9];

console.log(largestNumber(A));

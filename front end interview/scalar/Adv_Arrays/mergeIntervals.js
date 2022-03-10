// function mergeIntervals(A, B) {
//   let arrayLength = A[1][1];
//   let res = new Array(arrayLength).fill(0);

//   let mergeArray = new Array(B[0][1]).fill(0);

//   for (let i = 0; i < A.length; i++) {
//     let startIndex = A[i][0];
//     let endIndex = A[i][1];

//     while (startIndex <= A[i][1]) {
//       res[startIndex - 1] += 1;
//       startIndex++;
//     }

//     endIndex -= 1;
//     console.log(endIndex, "endIndex");

//     console.log(res);
//   }
// }

function mergeIntervals(A, B) {
  A.sort((a, b) => {
    a[0] - b[0];
  });
  let last = [null, -1];
  const results = [];
  for (let [start, end] of A) {
    if (start > B[1]) {
      last = [start, end];
    }
  }
}

A = [
  [1, 3],
  [6, 9],
];

B = [2, 5];

console.log(mergeIntervals(A, B));

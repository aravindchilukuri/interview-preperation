function GoodSubArrays(A, B) {
  for (let start = 0; start < A.length; start++) {
    let sum = 0;
    let array = [];
    let count = 0;
    c = [...Array(N)].map((x) => Array(M).fill(0));
    for (let end = start; end < A.length; end++) {
      array.push(A[end]);
      if (array.length % 2 == 0) {
        sum += A[end];
        if (sum < B) {
          count++;
        }
      } else {
        if (sum > B) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(GoodSubArrays([13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9], 65));

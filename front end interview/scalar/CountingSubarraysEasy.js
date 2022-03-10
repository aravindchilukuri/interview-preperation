function CountSubArrays(A, B) {
  let count = 0;
  for (let start = 0; start < A.length; start++) {
    let sum = BigInt(0);

    for (let end = start; end < A.length; end++) {
      console.log(`sub ${start} to ${end}`);
      for (let i = start; i <= end; end++) {
        console.log(A[i]);
      }
      //   sum += BigInt(A[end]);
      //   if (sum < B) {
      //     count++;
      //   }
    }
  }
}

console.log(CountSubArrays([2, 5, 6], 10));

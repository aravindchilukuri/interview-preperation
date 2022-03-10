function largestSumZero(A) {
  let hM = new Map();
  let mLen = 0;
  let i = -1;
  let sum = 0;
  let len = 0;
  let j = 0;
  let result_i = 0;
  let result = new Array(0);
  hM.set(sum, i);
  while (i < A.length - 1) {
    i++;
    sum += A[i];
    if (!hM.has(sum)) {
      hM.set(sum, i);
    } else {
      len = i - hM.get(sum);
      if (len > mLen) {
        mLen = len;
        j = hM.get(sum);
        result_i = i;
      }
    }
  }
  for (let k = j + 1; k <= result_i; k++) {
    result.push(A[k]);
  }

  return result;
  //   return mLen;
  //   let sum = 0;
  //   let max_len = 0;
  //   let value = 0;
  //   let new_array = [];

  //   for (let i = 0; i < A.length; i++) {
  //     sum += A[i];
  //     if (A[i] == 0 && max_len == 0) {
  //       max_len = 1;
  //     }
  //     if (sum == 0) {
  //       max_len = i + 1;
  //     }
  //     let prev_i = hM.get(sum);

  //     if (prev_i != null) {
  //       max_len = Math.max(max_len, i - prev_i);
  //       console.log(prev_i, "prev_i");
  //       value = prev_i + 1;
  //     } else {
  //       hM.set(sum, i);
  //     }
  //   }
  //   for (let j = value + 1; j <= max_len; j++) {
  //     new_array.push(A[j]);
  //   }
  //   return new_array;
}

A = [1, 2, -1, 1, 3, -1, 1, 4];

console.log(largestSumZero(A));

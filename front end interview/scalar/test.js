function test(A) {
  let i;
  for (i = 0; i < A.length; i++) {
    if (A[i] == 4) {
      break;
    }
  }
  console.log(A[i]);
}

test([1, 2, 35, 4, 6]);

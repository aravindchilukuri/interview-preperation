function intrestArray(A) {
  xor = 0;
  for (let i = 0; i < A.length; i++) {
    xor ^= A[i];
  }
  if (xor % 2 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}

A = [9, 17];
console.log(intrestArray(A));

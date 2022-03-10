function singleNumber(A) {
  res = A[0];
  for (let i = 1; i < A.length; i++) {
    res = res ^ A[i];
  }
  console.log(res ^ A[3]);
  value = Number(res);

  return value;
}

A = [1, 2, 2, 3, 1];

console.log(singleNumber(A));

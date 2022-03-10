function excelCode(A) {
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result *= 26;
    result += A[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
}

A = "ABCD";

console.log(excelCode(A));

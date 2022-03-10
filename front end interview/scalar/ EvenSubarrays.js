function EvenSubArrays(A) {
  if (A.length % 2 != 0 || A[0] % 2 != 0 || A[A.length - 1] % 2 != 0) {
    return "NO";
  }
  return "YES";
}

console.log(EvenSubArrays([2, 4, 8, 6]));

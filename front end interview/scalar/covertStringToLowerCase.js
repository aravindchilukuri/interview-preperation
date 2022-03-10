function coverStringToLowerCase(A) {
  for (let i = 0; i < A.length; i++) {
    if (
      A[i].charCodeAt(0) >= "A".charCodeAt(0) &&
      A[i].charCodeAt(0) <= "Z".charCodeAt(0)
    ) {
      A[i] = String.fromCharCode(A[i].charCodeAt(0) + 32);
    }
  }
  return A;
}

A = ["S", "c", "A", "l", "e", "r", "A", "c", "a", "D", "e", "m", "y"];

console.log(coverStringToLowerCase(A));

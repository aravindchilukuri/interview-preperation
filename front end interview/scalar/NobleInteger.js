function nobelInteger(A) {
  B = A.sort((a, b) => {
    return a - b;
  });

  let lesser = 0;
  let nobel = 0;
  for (let i = 0; i < B.length; i++) {
    if (i > 0 && B[i] == B[i - 1]) {
    } else {
      lesser = i;
    }
    if (B[i] == lesser) {
      nobel += 1;
    }
  }
  return nobel;
}
A = [3, 2, 1, 3];
console.log(nobelInteger(A));

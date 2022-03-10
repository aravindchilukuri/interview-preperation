function sortColor(A) {
  (red = 0), (white = 0), (blue = 0);
  for (let i = 0; i < A.length; i++) {
    switch (A[i]) {
      case 0:
        red++;
        break;
      case 1:
        white++;
        break;
      case 2:
        blue++;
        break;
    }
  }

  i = 0;

  while (red > 0) {
    A[i++] = 0;
    red--;
  }

  while (white > 0) {
    A[i++] = 1;
    white--;
  }

  while (blue > 0) {
    A[i++] = 2;
    blue--;
  }
  return A;
}

A = [0, 1, 2, 0, 1, 2];

console.log(sortColor(A));

function exponential(A, B, C) {
  if (A === 0) return 0;
  if (B === 0) return 1;

  x = exponential(A, B / 2, C);

  x = ((x % C) * (x % C)) % C;

  if (B % 2 === 0) {
    return x;
  } else if (A < 0) {
    return C + (((x % C) * (A % C)) % C);
  }
  return ((x % C) * (A % C)) % C;
}

A = 71045970;
B = 41535484;
C = 64735492;

console.log(exponential(A, B, C));

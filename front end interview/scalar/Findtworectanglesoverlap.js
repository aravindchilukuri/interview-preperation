function findTwoRectanglesOverLap(A, B, C, D, E, F, G, H) {
  if (C > E && D > F && A < G && B < H) return 1;
  return 0;
}

A = 0;
B = 0;
C = 4;
D = 4;
E = 2;
F = 2;
G = 3;
H = 3;

console.log(findTwoRectanglesOverLap(A, B, C, D, E, F, G, H));

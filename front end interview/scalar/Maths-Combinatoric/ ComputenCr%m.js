// function calculate(N, r, p) {
//   if (r === 1) return N % p;
//   if (r == N || r == 0) return 1;
//   return ((calculate(N - 1, r, p) % p) + (calculate(N - 1, r - 1, p) % p)) % p;
// }

function calculate(n, r, m) {
  let mat = new Array(n + 1).fill(0).map(() => new Array(r + 1).fill(0));
  mat[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    mat[i][0] = 1;
    for (let j = 1; j <= r; j++) {
      mat[i][j] = (mat[i - 1][j - 1] + mat[i - 1][j]) % m;
    }
  }
  return mat[n][r];
}

n = 5;
r = 2;
m = 13;

console.log(calculate(n, r, m));

function modString(A, B) {
  let ans = 0;
  let exp = 1;

  for (let i = A.length - 1; i >= 0; i--) {
    ans = ans + ((((A[i] % B) * exp) % B) % B);
    exp = (exp * 10) % B;
  }

  return ans;
}

// function modString(A, B) {
//   ans = 0;
//   let N = A.length;
//   for (let i = 0; i < N; i++) {
//     ans = (ans + A[i] * power(10, N - i - 1, B)) % B;
//   }
//   return ans;
// }

// function power(a, n, p) {
//   let ans = 1;
//   for (let i = 0; i < n; i++) {
//     ans = (((ans % p) * a) % p) % p;
//   }
//   return ans;
// }
A = "878";
B = 93;

console.log(modString(A, B));

function LCM(A, B) {
  let gcd;
  let lcm;
  for (let i = 0; i <= A && i <= B; i++) {
    if (A % i == 0 && B % i == 0) {
      gcd = i;
    }
  }
  lcm = (A * B) / gcd;
  return lcm;
}

A = 2;
B = 3;

console.log(LCM(A, B));

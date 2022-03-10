function LuckyNumbers(A) {
  is_prime = new Array(A + 1).fill(true);
  is_prime[1] = is_prime[0] = false;
  for (let i = 2; i * i <= A; i++) {
    if (is_prime[i]) {
      for (let j = i * i; j <= A; j++) {
        is_prime[j] = false;
      }
    }
  }

  const indices = is_prime.reduce(
    (out, bool, index) => (bool ? out.concat(index) : out),
    []
  );
}

A = 8;

console.log(LuckyNumbers(A));

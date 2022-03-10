function primeSum(n) {
  is_prime = new Array(n + 1).fill(true);

  is_prime[0] = is_prime[1] = false;
  result = [];

  for (let i = 2; i * i <= n; i++) {
    if (is_prime[i]) {
      for (m = i * i; m <= n; m += i) {
        is_prime[m] = false;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (is_prime[i] && is_prime[n - i]) {
      result.push(i, n - i);
      return result;
    }
  }
}
n = 74;
console.log(primeSum(n));

function fib(n) {
  if (n <= 0) return 0;
  else if (n <= 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

function fibMemo(n, memo = { 0: 0, 1: 1 }) {
  if (n in memo) {
    return memo[n];
  }
  const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = result;
  return result;
}

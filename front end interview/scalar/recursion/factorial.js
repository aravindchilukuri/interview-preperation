function factorial(A) {
  if (A === 0) return 1;
  return A * factorial(A - 1);
}

console.log(factorial(4));

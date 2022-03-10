function repeating(A) {
  let freq = new Map();
  for (let x of A) {
    if (!freq.has(x)) {
      freq.set(x, 0);
    }
    freq.set(x, freq.get(x) + 1);
  }
  for (let x of A) {
    if (freq.get(x) > 1) {
      return x;
    }
  }
  return -1;
}

function numberBit(N) {
  count = 0;
  if ((N & 1) === 1) {
    count++;
    N = N >> 1;
  }
  return count;
}

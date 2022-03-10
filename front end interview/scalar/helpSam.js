function helpSam(A) {
  let count = 0;
  while (A > 0) {
    if (A & (1 == 1)) {
      count++;
    }
    A = A >> 1;
  }
  return count;
}

console.log(helpSam(5));

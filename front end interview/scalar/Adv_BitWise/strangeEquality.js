function strangeEquality(A) {
  let maxValue = -Infinity;
  let minValue = Infinity;
  for (let i = 0; i < 31; i++) {
    for (let i = 0; i < A; i++) {
      if ((i ^ A) === i + A) {
        maxValue = Math.max(maxValue, i);
      }
    }
    for (let j = A; j < 100000 - A; i++) {
      if ((j ^ A) === j + A) {
        minValue = j;
        break;
      }
    }
  }
  return maxValue ^ minValue;
}

A = 5;

console.log(strangeEquality(A));

function consecutiveSequence(A) {
  let value = new Set(A);
  let min = Math.min(...value);
  let max = Math.max(...value);
  max_length = length_value = 0;
  for (let i = min; i <= max; i++) {
    if (value.has(i)) {
      length_value++;
    } else {
      length_value = 0;
    }
    max_length = Math.max(max_length, length_value);
  }
  return max_length;
}

A = [100, 4, 200, 1, 3, 2];

console.log(consecutiveSequence(A));

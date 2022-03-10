function unsetArray(A, B) {
  let value = A;
  for (let i = 0; i < B; i++) {
    if (A & (1 << i)) {
      value = value - (1 << i);
    }
  }
  return value;
}

console.log(unsetArray(25, 3));

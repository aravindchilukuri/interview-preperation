function diff(A, k) {
  let count;
  present = new Set(A);
  for (let x of A) {
    if (x == k + x) {
      count = 0;
      for (let y of A) {
        if (x === y) {
          count += 1;
        }
      }
      if (count >= 2) {
        return 1;
      }
    } else if (present.has(k + x)) {
      return 1;
    }
  }
  return 0;
}

A = [1, 5, 3];
k = 2;

console.log(diff(A, k));

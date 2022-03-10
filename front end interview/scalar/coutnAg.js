function countAg(A) {
  let count = 0;
  let total = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == "A") {
      count++;
    } else if (A[i] == "G") {
      total += count;
    }
  }
  return total;
}

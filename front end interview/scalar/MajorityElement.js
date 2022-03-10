function majorityElement(A) {
  let element = A[0];
  let c = 0;
  freq = 1;
  let N = A.length;
  for (let i = 1; i < N; i++) {
    if (freq == 0) {
      element = A[i];
    } else if (A[i] == element) {
      freq = freq + 1;
    } else {
      freq = freq - 1;
    }
  }

  for (i = 0; i < N; i++) {
    if (element == A[i]) {
      c = c + 1;
    }
  }
  if (c > Math.floor(N / 2)) {
    return element;
  }
}

console.log(majorityElement([2, 1, 2]));

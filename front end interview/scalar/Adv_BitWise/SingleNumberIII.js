function singleNumber(A) {
  let xor = 0;
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    xor ^= A[i];
  }
  let group1 = 0;
  let group2 = 0;

  for (let i = 0; i < A.length; i++) {
    if (xor & (1 << i)) {
      result = i;
      break;
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] & (1 << result)) {
      group1 ^= A[i];
    } else {
      group2 ^= A[i];
    }
  }

  if (group1 > group2) {
    [group1, group2] = [group2, group1];
  }

  return [group1, group2];
}

A = [186, 256, 102, 377, 186, 377];

console.log(singleNumber(A));

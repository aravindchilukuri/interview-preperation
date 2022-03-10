function singleNumber(A) {
  const sameFrquencyNumber = {};
  for (let i = 0; i < A.length; i++) {
    let number = A[i];
    sameFrquencyNumber[number]
      ? (sameFrquencyNumber[number] += 1)
      : (sameFrquencyNumber[number] = 1);
  }
  for (const [key, value] of Object.entries(sameFrquencyNumber)) {
    if (value === 1) {
      return key;
    }
  }
}

A = [1, 2, 4, 3, 3, 2, 2, 3, 1, 1];
console.log(singleNumber(A));

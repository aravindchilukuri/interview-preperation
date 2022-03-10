function anotherSequence(A) {
  if (A === 0) return 1;
  else if (A === 1) return 1;
  else if (A === 2) return 2;

  return (
    anotherSequence(A - 1) + anotherSequence(A - 2) + anotherSequence(A - 3) + A
  );
}

A = 3;
console.log(anotherSequence(A));

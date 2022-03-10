function numberOfOneBits(A) {
  let bin = BigInt(0);
  let reminder,
    i = 1;
  while (A != 0) {
    reminder = A % 2;
    A = BigInt(parseInt(A / 2));
    bin = BigInt(bin) + BigInt(reminder) * BigInt(i);
    i = BigInt(i * 10);
  }
  val = bin.toString();

  let count = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] == 1) {
      count++;
    }
  }
  return count;
}

console.log(numberOfOneBits(450676354));

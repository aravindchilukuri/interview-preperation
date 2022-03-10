function magicNumber(A) {
  // we are doing it wit bit manupulations so here 0001 0010 0011

  let val = 0;
  let temp = 1;
  while (A > 0) {
    temp = temp * 5;
    if (A & (1 == 1)) {
      val += temp;
    }
    A = A >> 1;
  }
  return val;
}

console.log(magicNumber(2));

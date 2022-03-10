function greatCommonDivisor(a, b) {
  var divisor = 2;
  greatDivisor = 1;
  if (a < 2 || b < 2) {
    return 1;
  }
  while (a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      greatDivisor = divisor;
    } else {
      divisor++;
    }
  }
  return greatDivisor;
}

console.log(greatCommonDivisor(10, 12));

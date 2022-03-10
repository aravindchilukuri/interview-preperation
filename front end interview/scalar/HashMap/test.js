function timer(a, b) {
  let val = Infinity;
  a = a % 12;
  let hourmin = 0.5 * b;
  let hour = 30 * a;
  let min = 6 * b;
  let angle = Math.abs(hour + hourmin - min);
  val = 360 - angle;
  return Math.min(angle, val);
}

console.log(timer(9, 25));

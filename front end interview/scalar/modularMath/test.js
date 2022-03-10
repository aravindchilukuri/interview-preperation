function binexp(n, p, m) {
  if (p == 0) {
    console.log("executed");
    return 1;
  }

  let x = binexp(n, p / 2, m);
  console.log(x, "x is returned");
  x = (x * x) % m;
  if (p % 2 == 0) {
    console.log("p%2 I have executed");
    return x;
  } else {
    console.log("else part I have done");
    return (x * n) % m;
  }
}
function mod_inv(n, m) {
  return binexp(n, m - 2, m);
}

console.log(mod_inv(3, 5));

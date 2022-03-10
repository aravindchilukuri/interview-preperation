function ABModulo(A, B) {
  let res = 0;
  let c = Math.max(A, B);

  for (let i = 0; i < c; i++) {
    let val = Math.abs((A % i) - (B % i));
    if (val === 0) {
      res = Math.max(res, i);
    }
  }
  return res;
}

console.log(ABModulo(5, 10));

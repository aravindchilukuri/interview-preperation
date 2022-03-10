let a = [1, 2, 3, [4, 5], 6, 7, [8, 9, [2, 3]], 10];

function value(a) {
  valuelength = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length) {
      res = value(a[i]);
      valuelength = valuelength.concat(res);
    }
  }
  return valuelength;
}

function value2a(a) {
  return a.reduce(
    (ac, cu) => ac.concat(Array.isArray(cu) ? value2a(cu) : cu),
    []
  );
}
console.log(value(a));

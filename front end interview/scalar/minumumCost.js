function minCost(A) {
  let cost = 0;
  k = Math.max(...A);
  console.log(k);
  let n = A.length;
  for (let i = 0; i < n; i++) {
    cost += Math.abs(A[i] - k);
  }
  return cost;
}
console.log(
  minCost([
    731, 349, 490, 781, 271, 405, 811, 181, 102, 126, 866, 16, 622, 492, 194,
    735,
  ])
);

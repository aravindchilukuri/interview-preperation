function shaggyDis(A) {
  let last_seen = new Map();
  let dist = Infinity;
  for (let i = 0; i < A.length; i++) {
    if (last_seen.has(A[i])) dist = Math.min(dist, i - last_seen.get(A[i]));
    last_seen.set(A[i], i);
  }
  if (dist === Infinity) return -1;
  return dist;
}

A = [7, 1, 3, 4, 1, 7];
console.log(shaggyDis(A));

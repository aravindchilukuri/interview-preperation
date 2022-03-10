function shaggyDistance(A) {
  let hM = new Map();
  let i = -1;
  minDistance = 10000000;
  let currentIndex = 0;
  let previousIndex = 0;
  while (i < A.length - 1) {
    i++;
    if (hM.has(A[i])) {
      currentIndex = i;
      previousIndex = hM.get(A[i]);
      minDistance = Math.min(currentIndex - previousIndex, minDistance);
    }
    hM.set(A[i], i);
  }
  return minDistance == 1000000 ? -1 : minDistance;
}

A = [7, 1, 3, 4, 1, 7];
console.log(shaggyDistance(A));

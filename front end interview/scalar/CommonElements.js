function distinctElements(A, B) {
  let freq = new Map();
  let result = [];
  for (let x of A) {
    if (!freq.has(x)) {
      freq.set(x, 0);
    }
    freq.set(x, freq.get(x) + 1);
  }
  for (let y of B) {
    if (freq.get(y) && freq.get(y) > 0) {
      console.log(freq);
      result.push(y);
      freq[y]--;
    } else {
      freq.delete(y);
      console.log(freq, "frw");
    }
  }
  return result;
}

A = [2, 1, 4, 10];
B = [3, 6, 2, 10, 10];
console.log(distinctElements(A, B));

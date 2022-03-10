// hear we are solving using HashMap
// we are trying to see if particular element is already present or no

function maxSubString(S) {
  let view = new Map();
  let start = 0;
  let max_value = 0;
  for (let i = 0; i < S.length; i++) {
    if (view.has(S[i])) {
      console.log(view, "view");
      start = Math.max(start, view.get(S[i]) + 1);
    }
    view.set(S[i], i);
    console.log(view, "view values");
    max_value = Math.max(max_value, i - start + 1);
  }

  return max_value;
}

A = "abcabcbb";
console.log(maxSubString(A));

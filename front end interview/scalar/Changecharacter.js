const countChar = (str) => {
  const counts = {};
  let count_values;
  for (const s of str) {
    if (counts[s]) {
      counts[s]++;
    } else {
      counts[s] = 1;
    }
  }
  count_values = Object.entries(counts)
    .sort(([, a], [, b]) => a - b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  console.log("results", count_values);
  for (let value in count_values) {
  }
};

console.log(countChar("abcabbccd"), 3);

// hashmap practices

// frequency queries
function countFrequency(A) {
  let frequency = new Map();
  for (let x of A) {
    if (!frequency.has(x)) {
      frequency.set(x, 0);
    }
    frequency.set(x, frequency.get(x) + 1);
  }

  console.log(frequency);
}

A = [1, 2, 3, 4, 5, 1, 5];
console.log(countFrequency(A));

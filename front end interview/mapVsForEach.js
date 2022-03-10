arr = [4, 5, 6, 2, 15];

const mapResult = arr.map((e) => {
  return e * 2;
});

const forEachResult = arr.forEach((element, i) => {
  arr[i] = element * 2;
});

console.log(mapResult, forEachResult);

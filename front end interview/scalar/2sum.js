function twoSum(a, b) {
  // let result = [];

  // if (A.length < 2) {
  //   return result;
  // }

  // let map = new Map();
  // for (let i = 0; i < A.length; i++) {
  //   map.set(A[i], i + 1);
  // }

  // for (let j = 0; j < A.length; j++) {
  //   let remain = B - A[j];
  //   if (map.has(remain)) {
  //     if (map.get(remain) > j + 1) {
  //       result[0] = j + 1;
  //       result[1] = map.get(remain);
  //     }
  //   }
  // }
  // return result;
  var hash = {};

  for (var i = 1; i < a.length; i++) {
    if (hash[a[i]] || hash[a[i]] === 0) continue;
    hash[a[i]] = i;
  }
  console.log(hash, "hash");

  // for (var i = a.length - 1; i > 0; i--) {
  for (var i = 2; i < a.length; i++) {
    console.log(i, "i");
    var curVal = a[i];
    var j = hash[b - curVal];

    console.log(a[i], a[j]);

    if (j || j === 0) {
      if (i <= j) continue;

      return [j, i];
    }
  }

  return [];
}

A = [
  4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3, -3,
  -5, 4, -7, 7, 9, -4, 4, -8,
];
B = -3;

console.log(twoSum(A, B));

function leftRotate(A, B) {
  let arr = [];

  let n = A.length;
  let m = B.length;
  for (let i = 0; i < m; i++) {
    let res = B[i] % n;

    let mainArray = [];
    for (let j = res; j < n; j++) {
      mainArray.push(A[j]);
    }
    for (let j = 0; j < res; j++) {
      mainArray.push(A[j]);
    }
    arr.push(mainArray);
  }
  return arr;
}

console.log(leftRotate([5, 17, 100, 11], [1, 2, 4, 5, 7]));

function myCompare(X, Y) {
  let XY = X + "" + Y;
  let YX = Y + "" + X;
  if (XY < YX) {
    return 1;
  } else if (XY == YX) {
    return 0;
  } else {
    return -1;
  }
}

function LargestNumber(A) {
  A.sort(myCompare);
  console.log(A.join(""));
}

A = [3, 30, 34, 5, 9];

console.log(LargestNumber(A));

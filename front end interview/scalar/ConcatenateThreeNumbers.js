function concatenateThreeNumbers(A, B, C) {
  let array1 = [A, B, C];
  array1.sort((a, b) => a - b);
  let s1 = array1[0].toString();
  let s2 = array1[1].toString();
  let s3 = array1[2].toString();

  let s = s1 + s2 + s3;
  return parseInt(s);
}

A = 10;
B = 20;
C = 30;
console.log(concatenateThreeNumbers(A, B, C));

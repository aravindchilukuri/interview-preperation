function divisibilityByEight(str) {
  let n = str.length;

  // Empty string
  if (n == 0) return 0;

  // If there is single digit
  if (n == 1) {
    if ((str[0] - "0") % 8 == 0) {
      return 1;
    } else 0;
  }

  if (n == 2) {
    if (((str[n - 2] - "0") * 10 + (str[n - 1] - "0")) % 8 == 0) {
      return 1;
    } else return 0;
  }

  // If number formed by last three
  // digits is divisible by 8
  let last = str[n - 1] - "0";
  let second_last = str[n - 2] - "0";
  let third_last = str[n - 3] - "0";

  if ((third_last * 100 + second_last * 10 + last) % 8 == 0) {
    return 1;
  } else return 0;
}

A = "163";
console.log(divisibilityByEight(A));

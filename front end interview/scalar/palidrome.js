function isPalidromeReverse(str) {
  var i,
    len = str.length;
  let A = "";
  let B = "";

  for (i = 0; i <= len / 2; i++) {
    if (str[i] == str[len - 1 - i]) {
      let value = str[len - 1 - i].split("").reverse().join();
      A = A + str[i] + value;
    } else {
      B = str[i];
    }
  }

}

A = "aaaabaaa";
console.log(isPalidromeReverse(A));

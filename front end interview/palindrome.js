function isPalindrome(str) {
  var i,
    len = str.length;
  for (i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}


function isPalidromeReverse(str) {

    const stringSplit = str.split('');

    const reserveStr = stringSplit.reverse();

    const palindromeStr = reserveStr.join('')

    if(palindromeStr === str) {
        return true;
    } else {
        return false;
    }

}
console.log(isPalidromeReverse("aamamaa"));

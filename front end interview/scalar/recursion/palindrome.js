function palindrome(str) {
  if (str.length === 0) return true;
  return is_palindrome(str, 0, str.length - 1);
}

function is_palindrome(str, s, e) {
  if (str.charAt(s) != str.charAt(e)) {
    return false;
  }
  if (s == e) return true;
  if (s < e + 1) {
    return is_palindrome(str, s + 1, e - 1);
  }
  return true;
}

console.log(palindrome("level"));

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const stringAnagaram = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    stringAnagaram[letter]
      ? (stringAnagaram[letter] += 1)
      : (stringAnagaram[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!stringAnagaram[letter]) {
      return false;
    } else {
      stringAnagaram[letter] -= 1;
    }
  }
  return true;
} 

console.log(anagram("ara", "raa"));

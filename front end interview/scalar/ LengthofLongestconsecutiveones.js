function LengthOfLongestConsecutive(A) {
  let ans = 0;
  let value = A;
  for (let i = 0; i < value.length; i++) {
    if (value[i] == "0") {
      l = 0;

      for (let j = i - 1; j >= 0; j--) {
        if (value[j] == "1") {
          l++;
        } else {
          break;
        }
      }
      r = 0;
      for (let j = i + 1; j < value.length; j++) {
        if (value[j] == "1") r++;
        else break;
      }
      ans = Math.max(ans, l + r + 1);
    }
  }
  return ans;
}

LengthOfLongestConsecutive("111000");
// console.log(LengthOfLongestConsecutive("111000"));

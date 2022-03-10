function addTwoBinaryString(a, b) {
  let i = A.length - 1;
  let j = B.length - 1;

  let ans = "";
  let carry = 0,
    sum = 0;
  while (i >= 0 || j >= 0 || carry == 1) {
    sum = carry;
    if (i >= 0) sum += Number(A[i]);
    if (j >= 0) sum += Number(B[j]);
    ans += String(sum % 2);
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }
  return ans.split("").reverse().join("");
}
A = "100";

B = "11";

addTwoBinaryString(A, B);

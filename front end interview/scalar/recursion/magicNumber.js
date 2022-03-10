// Sum of digits of (83557) = 28
//  Sum of digits of (28) = 10
//  Sum of digits of (10) = 1.
//  Single digit is 1, so it's a magic number. Return 1.
// Explanation 2:

//  Sum of digits of (1291) = 13
//  Sum of digits of (13) = 4
//  Single digit is not 1, so it's not a magic number. Return 0.

function magicNum(num) {
  if (num === 1) return 1;
  if (num >= 2 && num <= 9) return 0;
  value = (num % 10) + parseInt(num / 10);
  return magicNum(value);
}

console.log(magicNum(1291));

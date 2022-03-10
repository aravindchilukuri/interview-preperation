// function sumOfDigits(num) {
//   console.log(parseInt(num / 10) + (num % 10));
// }

// function output(x, n) {
//   if (n == 0) {
//     return 1;
//   } else if (n % 2 == 0) {
//     return output(x * x, n / 2);
//   } else {
//     return x * output(x * x, (n - 1) / 2);
//   }
// }

// function bar(x, y) {
//   if (y == 0) return 0;
//   return x + bar(x, y - 1);
// }

// function foo(x, y) {
//   if (y == 0) return 1;
//   return bar(x, foo(x, y - 1));
// }

// console.log(foo(3, 5));

// function sumOfDigits(num) {
//   if (num == 0) return 0;

//   return (num % 10) + sumOfDigits(parseInt(num / 10));
// }

// console.log(sumOfDigits(46));

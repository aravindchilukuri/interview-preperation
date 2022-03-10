A = [0, 0, 1, 2, 3];
function addOneToNumber(A) {
  let str = "";
  let ans;
  let result = Array(0);
  if (A.length == 1) {
    return [A[0] + 1];
  } else {
    str = A.join().replace(/,/g, "");
    ans = parseInt(str) + 1;
  }
  while (ans > 0) {
    value = ans % 10;
    ans = parseInt(ans / 10);
    result.push(value);
  }
  result.reverse();
  return result;
}

// function addOneToNumber(a) {
//   let n = a.length;

//   // Add 1 to last digit and find carry
//   a[n - 1] += 1;
//   let carry = parseInt(a[n - 1] / 10);
//   a[n - 1] = a[n - 1] % 10;

//   // Traverse from second last digit
//   for (let i = n - 2; i >= 0; i--) {
//     if (carry == 1) {
//       a[i] += 1;
//       carry = parseInt(a[i] / 10);
//       a[i] = a[i] % 10;
//     }
//   }

//   // If carry is 1, we need to add
//   // a 1 at the beginning of vector
//   if (carry == 1) a.unshift(1);

//   while (a.indexOf(0) === 0) {
//     a.shift();
//   }

//   return a;
// }

console.log(addOneToNumber(A));

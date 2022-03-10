// // let a = true;
// // let c = 0

// // let id = setInterval(() => {
// //    console.log(c++)
// // }, 200);

// // setTimeout(() => {
// //     clearInterval(id)
// // }, 2000);

// // var myArray = ['a','b','c','d']

// // myArray.push('end')
// // myArray.unshift('start')

// // console.log(['start',...myArray, 'end'])

// // console.log(myArray)

// //* how to create privat vaiable in javascript

// // function secretFunction() {
// //     var private = "super secret";
// //     return function() {
// //         return private
// //     }
// // }

// // var getPrivateVariable = secretFunction()

// // console.log(getPrivateVariable())

// //   const x = [1,2,3,930,3,0]

// //  console.log(x.sort((a,b) => {
// //      return a > b
// //  }) )

// //revers

// // function revereString(str) {
// //     return str.split('').reverse().join('')
// // }

// // console.log(revereString('Aravind'))

// // function printTiribRec(n) {
// //     if(n == 0 || n == 1 || n == 2)
// //     return 0;
// //     if(n == 3)
// //     return 1;
// //     else
// //     return printTiribRec(n-1) + printTiribRec(n-2 ) + printTiribRec(n-3)
// // }

// // function printTrib(n) {
// //     var ans =0;
// //     for(var i =1;i<n;i++) {
// //         ans = ans + printTiribRec(i) + " "
// //     }
// // console.log(ans)
// // }

// // function fun(A,B) {
// //     if(B == 0)
// //     return A;
// //     return fun(B,A%B);

// // }
// // var ans = fun(100,2000)
// // console.log(ans)

// // function medianOfTwoSortedArray(num1,num2) {
// //     const mergeArray = num1.concat((num2));
// //     const array1 = mergeArray.sort((a,b) => {
// //         return a-b
// //     });
// //     const median = Math.floor(array1.length / 2);
// //     return array1[median];
// // }

// // console.log(medianOfTwoSortedArray([1,3,2,9,4,2,7,0,3,2,1,3,5,2,12,3,1],[4,7,9]))

// // function bubbleSort(arr) {
// //   var noSwaps;
// //   for (i = 0; i < arr.length; i++) {
// //     noSwaps = true;
// //     for (j = i + 1; j < arr.length; j++) {
// //       if (arr[i] > arr[j]) {
// //         var temp = arr[i];
// //         arr[i] = arr[j];
// //         arr[j] = temp;
// //         noSwaps = false;
// //       }
// //       if (noSwaps) break;
// //     }
// //   }
// //   return arr;
// // }

// // console.log(bubbleSort([23, 2, 1, 3, 5]));

// // function insertionSort(arr) {
// //   for (let i = 1; i < arr.length; i++) {
// //     var currentValue = arr[i];
// //     for (j = j - 1; j >= 0 && arr[j] > currentValue; j--) {
// //       arr[j + 1] = arr[j];
// //     }
// //     arr[j + 1] = currentValue;
// //   }
// //   return arr;
// // }

// // function fibonacci(n) {
// //   if (n <= 1) {
// //     return n;
// //   } else {
// //     return fibonacci(n - 1) + fibonacci(n - 2;
// //   }
// // }

// // function findLargestSumPair(arr) {
// //   let max = 0;
// //   let temp = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //       temp = arr[i] + arr[j];
// //     }
// //   }
// //   if (max < temp) {
// //     max = temp;
// //   }
// //   return max;
// // }

// let arr1 = [12, 34, 10, 6, 40];
// console.log(findLargestSumPair(arr1));

// let n = A.length;

// let val = 0;

// for (let i = 0; i < n; i++) {
//   val = val ^ A[i];
// }

// let grp1 = 0;

// let grp2 = 0;

// let k = 0;

// for (let i = 0; i < n; i++) {
//   if (val & (1 << i)) {
//     k = i;

//     break;
//   }
// }

// for (let i = 0; i < n; i++) {
//   if (A[i] & (1 << k)) {
//     grp1 = grp1 ^ A[i];
//   } else {
//     grp2 = grp2 ^ A[i];
//   }
// }

// if (grp1 > grp2) {
//   [grp1, grp2] = [grp2, grp1];
// }

// return [grp1, grp2];

// console.log(getName());
// function getName() {
//   return "codeCraft";
// }

// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   getUsername() {
//     return this.username;
//   }
// }

// const newUser = new User("Bob");

// console.log(newUser.getUsername());

// function getName() {
//   return "inside getNma()";
// }

// const getName = function () {
//   return "inside Const";
// };

// console.log(getName());

// const value = [0, 1, 2, 3, 4, 5].filter((d) => {
//   if (d % 2 === 0) {
//     return true;
//   }
// });

// console.log(value);

// const numberone = [1, 2, 3];
// const numbertwo = [4, 5, 6];

// const numberCombined = [...numberone, numbertwo];

// console.log(numberCombined);

let activeId = [202, 204];
let serviceList = [
  {
    id: 201,
    title: "a",
  },
  {
    id: 202,
    title: "a",
  },
  {
    id: 203,
    title: "c",
  },
  {
    id: 204,
    title: "d",
  },
  {
    id: 205,
    title: "e",
  },
];

let val = serviceList.filter((item) => {
  activeId.indexOf(item.id) === -1;
});

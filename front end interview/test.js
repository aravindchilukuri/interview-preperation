// let a = true;
// let c = 0

// let id = setInterval(() => {
//    console.log(c++) 
// }, 200);

// setTimeout(() => {
//     clearInterval(id)
// }, 2000);

var myArray = ['a','b','c','d']

myArray.push('end')
myArray.unshift('start')

// console.log(['start',...myArray, 'end'])

// console.log(myArray)

//* how to create privat vaiable in javascript

// function secretFunction() {
//     var private = "super secret";
//     return function() {
//         return private
//     }
// }

// var getPrivateVariable = secretFunction()

// console.log(getPrivateVariable())


//   const x = [1,2,3,930,3,0]

//  console.log(x.sort((a,b) => {
//      return a > b
//  }) )


//revers

// function revereString(str) {
//     return str.split('').reverse().join('')
// }

// console.log(revereString('Aravind'))


// function printTiribRec(n) {
//     if(n == 0 || n == 1 || n == 2) 
//     return 0;
//     if(n == 3)
//     return 1;
//     else 
//     return printTiribRec(n-1) + printTiribRec(n-2 ) + printTiribRec(n-3)
// }

// function printTrib(n) {
//     var ans =0;
//     for(var i =1;i<n;i++) {
//         ans = ans + printTiribRec(i) + " "
//     }
// console.log(ans)
// }


// function fun(A,B) {
//     if(B == 0)
//     return A;
//     return fun(B,A%B);

// }
// var ans = fun(100,2000)
// console.log(ans)

// function medianOfTwoSortedArray(num1,num2) {
//     const mergeArray = num1.concat((num2));
//     const array1 = mergeArray.sort((a,b) => {
//         return a-b
//     });
//     const median = Math.floor(array1.length / 2);
//     return array1[median];
// }

console.log(medianOfTwoSortedArray([1,3,2,9,4,2,7,0,3,2,1,3,5,2,12,3,1],[4,7,9]))
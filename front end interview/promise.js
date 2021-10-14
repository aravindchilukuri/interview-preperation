/** Promises */

// function sumOfThreeElement(...elements) {
//     return new Promise((resolve,rejct) => {
//         if(elements.length > 3) {
//             rejct('only three elements or less are allowed')
//         } else {
//             let sum = 0;
//             let i = 0;
//             while(i < elements.length) {
//                 sum += elements[i];
//             }
//             resolve('sum of elements',sum)
//         }
//     })
// }

// console.log(sumOfThreeElement([1,22,3]))
// sumOfThreeElement(1, 2).then(v => console.log(v))
console.log(new Promise(1))
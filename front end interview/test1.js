// // // // let a

// // // // let b = value()
// // // // function value () {
// // // //     var b = 10
// // // //     return b
// // // // }

// // // // for (const i = 0; i < 4; i++) {
// // // //   setTimeout(() => {
// // // //     console.log(i);
// // // //   });
// // // // }

// // // <parent>
// // // <app [value]="val"></app>
// // // </parent>

// // // @intput('value')

// // // @outpur

// // // this.--

// // // // {{value}}
// // // // [ngModel]

// // // (click)

// // // <p

// // group Element by array

// // function groupArrayOfObjects(list, key) {
// //   return list.reduce(function(rv, x) {
// //     (rv[x[key]] = rv[x[key]] || []).push(x);
// //     return rv;
// //   }, {});
// // };

// function groupArrayOfObjects(arr, key) {
//   return arr.reduce((val, el) => {
//     (val[el[key]] = val[el[key]] || []).push(el);
//     return val;
//   }, {});
// }

// var people = [
//   { sex: "Male", name: "Jeff" },
//   { sex: "Female", name: "Megan" },
//   { sex: "Male", name: "Taylor" },
//   { sex: "Female", name: "Madison" },
// ];
// var groupedPeople = groupArrayOfObjects(people, "sex");
// console.log(groupedPeople.Male); //will be the Males
// console.log(groupedPeople.Female); //will be the Females

// var a=['j','u','r','g','e','n'];

// // array.slice(startIndex, endIndex)
// a.slice(2,3);
// // => ["r"]

// //array.splice(startIndex, deleteCount)
// a.splice(2,3);
// // => ["r","g","e"]

// function closure() {}

// function feb(n) {
//   const ps = [];

//   ps[0] = 1;
//   ps[1] = 1;
//   for (let i = 1; i < n; i++) {
//     ps.push(ps[i - 1] + ps[i]);
//   }

//   return ps;
// }

// function factorial(n) {
//   if (n<=0) {
//     return 1;
//   }

// return n * factorial(n - 1);

// }

// console.log(factoria(4));

A = [1, 2, 3, 4];
function reverseArray(A) {
  if (!A.length) return;

  c.push(A.pop());

  console.log(c);

  return reverseArray(A);
}

console.log(reverseArray(A));

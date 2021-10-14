/** funtion currying */

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyTwo = multiply.bind(this, 2);

// multiplyTwo(5)

/** function closure method */

// let mulitplyClos = function(x,y) {
//     console.log(x*y)
// }

let mulitplyClos = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyTwoClos = mulitplyClos(2);

// multiplyTwoClos(4)

/**sum(1)(2)(3)....(n)() */

let sum = (a) => (b) => b ? sum(a + b) : a;

/** prototype and protot  ypal inheritance */

// the whole inheritance in done using prototype and protypal
// the property which has property of another methods
//example

/**Event Bubbling & Capuring */

/** Debouncing */
let counter = 0;
const getData = () => {
  console.log("Fetching data..", counter++);
};

const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearInterval(timer);
    let timer = setTimeout(() => {
      getData.apply(context, args);
    }, d);
  };
};

const betterFunction = doSomeMagic(getData, 300);

/** Throttling */

const throttling = (func, limit) => {
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

/**the scope chain & lexical environment */
function a() {
  var b = 7;
  c();
  function c() {
    /// lexical environment of c is a
    // considering a is the parent
    console.log(b);
  }
}

// a();
// console.log(b) // referecnce error-- the lexical
//environment is global scope were b is not declared
//it points to null

/** 
console.log(a) /// it is in an temporal dead zone
let a = 10;
console.log(a) // the temporal dead zone ends after
// a is initiallizaiton is done
var b = 100;
*/

/**closure function with it lexal scope bundled together     */

function a() {
  var a = 10;
  function b() {
    console.log(a);
  }
  b();
}

a();

/** Reduce  */

const arr = [5, 2, 1, 3, 2, 1];

const output = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

/** find max using reduce */

const outputMax = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);


/**reduce how my values are there with same age */

const user = [ 
    {firstName:'aravind',age:25},
    {firstName:'srinadh',age:22},
    {firstName:'vanshika',age:2},
    {firstName:'jagannadh',age:25}
]

const outputAge = user.reduce((acc,curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc;
},{});

const outputage20 = user.filter((x) => 
    x.age > 20).map((x) => 
    x.firstName)


console.log(outputage20)
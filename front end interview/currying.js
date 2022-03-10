let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyTwo = multiply.bind(this, 3); // we make copy of a
//method and use it in another function
// we can do that using bind

multiplyTwo(6);

/// infinite currying

function add(a) {
  return function (b) {
    if (b) return a + b;
    return a;
  };
}

add(5)(2)(3)(4)(3)(8)();

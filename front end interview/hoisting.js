getName();
console.log(x);
var x = 7;

function getName() {
  console.log("welcome");
}

/** gues output */

let x = {},
  y = { name: "Ronny" },
  z = { name: "John" };

x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };

console.log(x[y]);

/**Output will be {name: “Akki”}.

Adding objects as properties of another object should be done carefully.

Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} ,

While setting a property of an object, javascript coerces the parameter into a string.

Therefore, since y is an object, it will be converted to ‘object Object’.

Both x[y] and x[z] are referencing the same property.
 */

var x = 23;

(function () {
  var x = 43;
  (function random() {
    x++;
    console.log(x);
    var x = 21;
  })();
})();

/** Out put is NAN */

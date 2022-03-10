/* he bind() method creates a new function that, when called, has its this keyword set to the provided
 value, with a given sequence of arguments preceding any provided when the new function 
is called. */

let name = {
  firstName: "Aravind",
  lastName: "chilukuri",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.printFullName();

let name2 = {
  firstName: "Aravind Software Engineer",
  lastName: "chilukuri",
};

/* call methond we can do function borrowing */
/** which is used to invoke a function */

name.printFullName.call(name2);

/* call methond */

let printFullNameCall = function (name, details) {
  console.log(this.firstName + " " + this.lastName + name + " " + details);
};

printFullNameCall.call(name2, "srinadh", "Chilukuri");

printFullNameCall.apply(name2, ["mumbai", "hyderbad"]);

/**bind  */

let printMyName = printFullNameCall.bind(name2, "Bangalore", "Hyderbaad");

console.log(printMyName);

printMyName();
/** bind the methond which we can invoke it later and use it later*/

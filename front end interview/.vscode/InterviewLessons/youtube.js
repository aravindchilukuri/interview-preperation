user = [
  { firstName: "Arav", age: 32 },
  { firstName: "sri", age: 2 },
];

let res = user.reduce((acc, curr) => {
  if (curr.age > 5) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(res);

function memoization()



const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 1000000; i++) {
    return num1 * num2;
  }
};

console.log(clumsySquare(123434, 93284237));

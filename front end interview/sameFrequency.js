/* find pir sameFrquency of positive integers */
function sameFrquency(num1, num2) {
  const Number1 = JSON.stringify(num1);
  const Number2 = JSON.stringify(num2);
  if (Number1.length !== Number2.length) {
    return false;
  }

  const sameFrquencyNumber = {};
  for (let i = 0; i < Number1.length; i++) {
    let number = Number1[i];
    sameFrquencyNumber[number]
      ? (sameFrquencyNumber[number] += 1)
      : (sameFrquencyNumber[number] = 1);
  }

  for (let i = 0; i < Number2.length; i++) {
    let number = Number2[i];

    if (!sameFrquencyNumber[number]) {
      return false;
    } else {
      sameFrquencyNumber[number] -= 1;
    }
  }
  return true;
}

console.log(sameFrquency(34, 14));

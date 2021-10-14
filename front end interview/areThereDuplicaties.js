function areThereDuplicates(Number1) {
  const sameFrquencyNumber = {};
  for (let i = 0; i < Number1.length; i++) {
    let number = Number1[i];
    sameFrquencyNumber[number]
      ? (sameFrquencyNumber[number] += 1)
      : (sameFrquencyNumber[number] = 1);
  }
  for (const [key,value] of Object.entries(sameFrquencyNumber)) {
   if(value > 1) {
    return false
   }
  }
  return true
}



 function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates([2, 3, 4]));

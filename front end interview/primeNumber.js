function iSPrimeNumber(n) {
  const primeNumber = n % 2;
  while (n > 2) {
    if (primeNumber === 0) {
      console.log("It is prime");
    } else {
      console.log("it is non prime");
    }
  }
}

iSPrimeNumber(232);

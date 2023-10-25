const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      console.log(i);
      return false;
    }
  }
  return num > 1;
};

console.log(isPrime(17));

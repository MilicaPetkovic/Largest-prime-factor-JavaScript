function largestPrimeFactor(n) {
  let i = 2;
  while (i <= n) {
    if (n % i == 0) {
      n /= i;
    } else {
      i++;
    }
  }
  return i;
}

const largestNumb = largestPrimeFactor(600851475143);

console.log(largestNumb);

document.write(
  `The largest prime factor of number 600851475143 is ${largestNumb}`
);

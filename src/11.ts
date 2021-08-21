const solve11 = (x: number, y: number) => {
  const factorial = (n: number) => {
    let c = 1;
    while (n > 0) {
      c *= n;
      n--;
    }
    return c;
  };

  const result = factorial(x) / (factorial(y) * factorial(x - y));

  if (result < 1) return -1;

  return result;
};

console.log(solve11(4, 4));

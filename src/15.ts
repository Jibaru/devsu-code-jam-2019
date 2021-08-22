const solve15 = (n: number): number => {
  const KAPREKAR_NUM = 6174;
  const digits = n.toString().split("");

  if (digits.length != 4 || new Set(digits).size < 2) {
    return -1;
  }

  let steps = 0,
    inc,
    dec;
  while (n != KAPREKAR_NUM) {
    inc = parseInt(
      n
        .toString()
        .split("")
        .sort((a, b) => (a > b ? 1 : -1))
        .join("")
    );
    dec = parseInt(
      n
        .toString()
        .split("")
        .sort((a, b) => (a > b ? -1 : 1))
        .join("")
    );
    n = dec - inc;
    steps++;
  }
  return steps;
};

console.log(solve15(3421));

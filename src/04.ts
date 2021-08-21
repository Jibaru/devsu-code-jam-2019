const solve04 = (n: number): number => {
  const t0 = -3;
  const r = 2;
  const m0 = 1;
  const a = r / 2;
  const b = m0 - a;
  const c = t0;

  return a * n * n + b * n + c;
};

console.log(solve04(5));

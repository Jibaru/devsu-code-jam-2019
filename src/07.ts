const solve07 = (n: number) => {
  if (!n) return "(O_o)";

  const GUYS = {
    COMPLETE: "(-_-)",
    L_SIDE: "(-_",
    R_SIDE: "_-)",
    L_PARTIAL: "(-_-",
    R_PARTIAL: "-_-)",
    L_FINAL: "(-",
    R_FINAL: "-)",
  };

  const k = Math.floor(n / 2 + 1);
  let res1 = [GUYS.COMPLETE];
  let res2 = [];

  for (let i = k + 1, j = 1; i <= n; i++, j++) {
    if (j == 3) {
      res1.push(GUYS.R_PARTIAL);
      j = 0;
    } else {
      res1.push(GUYS.R_SIDE);
    }
  }

  for (let i = k - 1, j = 1; i >= 1; i--, j++) {
    if (j == 3) {
      res2.unshift(GUYS.L_PARTIAL);
      j = 0;
    } else {
      res2.unshift(GUYS.L_SIDE);
    }
  }

  if (n > 7) {
    res1[res1.length - 1] = GUYS.R_FINAL;
    res2[0] = GUYS.L_FINAL;
  }

  return res2.join("") + res1.join("");
};

console.log(solve07(20));

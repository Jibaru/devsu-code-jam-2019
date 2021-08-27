const solve06 = (times: string[]) => {
  const HHAND_ANGLE_PER_HOUR = 30.0;
  const MHAND_ANGLE_PER_MINUTE = 6.0;
  const HHAND_ANGLE_PER_MINUTE = 0.5;

  const isInFormat = (time: string): boolean => /^\d{2}:\d{2}$/.test(time);
  const hasCorrectTime = (hh: any, mm: any) => {
    return (
      !isNaN(hh) && !isNaN(mm) && hh >= 0 && hh <= 23 && mm >= 0 && mm <= 59
    );
  };

  let anglesSum = 0.0;

  for (const time of times) {
    if (!isInFormat(time)) {
      anglesSum -= 100;
      continue;
    }

    let [hh, mm] = time.split(":").map((n) => parseInt(n));

    if (!hasCorrectTime(hh, mm)) {
      anglesSum -= 100;
      continue;
    }
    if (hh >= 12) hh -= 12;

    const hhIncrement = mm * HHAND_ANGLE_PER_MINUTE;
    hh = hh * HHAND_ANGLE_PER_HOUR;
    mm = mm * MHAND_ANGLE_PER_MINUTE;

    if (hh > mm) anglesSum = anglesSum + (360 - (hh + hhIncrement - mm));
    else anglesSum = anglesSum + mm - hh - hhIncrement;

  }

  return anglesSum;
};

console.log(solve06(["12:00"]));
console.log(solve06(["12:00", "17:30", "blabla", "20:21", "26:88"]));

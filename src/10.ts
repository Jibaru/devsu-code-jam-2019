const solve10 = (numbers: number[]) => {
  let result = numbers[0];
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 0; i < numbers.length; i++) {
    let prod = 1;
    for (let j = i + 1; j < numbers.length; j++) {
      prod *= numbers[j];
      if (prod > result) {
        result = prod;
        minIndex = i;
        maxIndex = j;
      }
    }
  }

  return numbers.slice(minIndex, maxIndex);
};

console.log(solve10([-3.2, 4.2, 7, 5.4, -2.2, -2.5]));

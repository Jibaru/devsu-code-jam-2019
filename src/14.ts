const solve14 = (numbers: number[]) => {
  if (numbers == null) return [];

  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      sum += numbers[j];
      if (sum == 0) {
        numbers.splice(i, j - i + 1);
        i--;
        break;
      }
    }
  }
  return numbers;
};

console.log(solve14([0, 3, 4, -7, 5, -6, 2, 5, -1, 8, 9]));
console.log(solve14([-3, -5, 8, 5, -4, -1]));

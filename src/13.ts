const solve13 = (matrix: number[][]) => {
  const indexes = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let index = i - j;
      if (indexes[index]) {
        if (indexes[index] != matrix[i][j]) {
          return -1;
        }
      } else {
        indexes[i - j] = matrix[i][j];
      }
    }
  }

  return new Set([...matrix[0], ...matrix.map((r) => r[0])]).size;
};

console.log(
  solve13([
    [1, 2, 3, 4, 8, 1],
    [5, 1, 2, 3, 4, 8],
    [4, 5, 1, 2, 3, 4],
    [7, 4, 5, 1, 2, 3],
  ]),
  solve13([[1]])
);

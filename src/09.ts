const solve09 = (matrix: string[][]) => {
  const MINE = "x";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == MINE) continue;
      let counter = 0;
      // right
      if (matrix[i][j + 1] && matrix[i][j + 1] == MINE) {
        counter++;
      }
      // left
      if (matrix[i][j - 1] && matrix[i][j - 1] == MINE) {
        counter++;
      }
      // top
      if (matrix[i - 1] && matrix[i - 1][j] == MINE) {
        counter++;
      }
      // bottom
      if (matrix[i + 1] && matrix[i + 1][j] == MINE) {
        counter++;
      }
      // top-right
      if (
        matrix[i - 1] &&
        matrix[i - 1][j + 1] &&
        matrix[i - 1][j + 1] == MINE
      ) {
        counter++;
      }
      // top-left
      if (
        matrix[i - 1] &&
        matrix[i - 1][j - 1] &&
        matrix[i - 1][j - 1] == MINE
      ) {
        counter++;
      }
      // bottom-right
      if (
        matrix[i + 1] &&
        matrix[i + 1][j + 1] &&
        matrix[i + 1][j + 1] == MINE
      ) {
        counter++;
      }
      // bottom-left
      if (
        matrix[i + 1] &&
        matrix[i + 1][j - 1] &&
        matrix[i + 1][j - 1] == MINE
      ) {
        counter++;
      }
      matrix[i][j] = counter.toString();
    }
  }
  return matrix;
};

console.log(
  solve09([
    ["", "", "", "x", "", "", "", "x", "", ""],
    ["", "", "x", "", "", "x", "", "", "", "x"],
    ["", "x", "", "", "", "x", "x", "x", "x", ""],
    ["", "", "", "x", "", "x", "", "x", "", ""],
    ["", "", "", "", "", "x", "x", "x", "", "x"],
    ["", "x", "", "", "x", "x", "x", "", "", ""],
  ])
);

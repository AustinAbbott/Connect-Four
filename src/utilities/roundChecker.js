function roundChecker(board) {
  // -------- COLUMNS -------- //
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 3; j++) {
      let value = board[i][j];
      if (
        value !== 0 &&
        board[i][j + 1] === value &&
        board[i][j + 2] === value &&
        board[i][j + 3] === value
      ) {
        return value;
      }
    }
  }

  // -------- ROWS -------- //
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let value = board[i][j];
      if (
        value !== 0 &&
        board[i + 1][j] === value &&
        board[i + 2][j] === value &&
        board[i + 3][j] === value
      ) {
        return value;
      }
    }
  }
  

  // -------- DIAGONALS -------- //
  let index = 0;
  let majorFinished = false;

  // MAJOR DIAGONALS
  while (!majorFinished) {
    for (let i = 0; i < 3; i++) {
      let value = board[index][i];
      if (
        value !== 0 &&
        value === board[index + 1][i + 1] &&
        value === board[index + 2][i + 2] &&
        value === board[index + 3][i + 3]
      ) {
        majorFinished = true;
        return value;
      }
    }
    if (index === 3) {
      majorFinished = true;
    } else {
      index++;
    }
  }

  // MINOR DIAGONALS
  index = 0;
  let minorFinished = false;

  while (!minorFinished) {
    for (let i = 5; i > 2; i--) {
      let value = board[index][i];
      if (
        value !== 0 &&
        value === board[index + 1][i - 1] &&
        value === board[index + 2][i - 2] &&
        value === board[index + 3][i - 3]
      ) {
        minorFinished = true;
        return value;
      }
    }
    if (index === 3) {
      minorFinished = true;
    } else {
      index++;
    }
  }

  return 0;
}

export default roundChecker;

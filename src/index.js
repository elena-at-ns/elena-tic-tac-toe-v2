class TicTacToe {
  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    this.currentPlayer = "X";
  }

  playTurn(x, y, mark) {
    if (this.board[x][y] === "") {
      this.board[x][y] = mark;
    }
  }

  checkWinner() {
    //win for rows
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2] &&
        this.board[i][0] !== ""
      ) {
        return this.board[i][0];
      }
    }
    //win for columns
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i] &&
        this.board[0][i] !== ""
      ) {
        return this.board[0][i];
      }
    }
    //win for diagonals
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[0][0] !== ""
    ) {
      return this.board[0][0];
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0] &&
      this.board[0][2] !== ""
    ) {
      return this.board[0][2];
    }

    return null;
  }
}

module.exports = TicTacToe;

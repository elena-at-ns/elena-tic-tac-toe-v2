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
    if (
      this.board[0][0] === this.board[0][1] &&
      this.board[0][1] === this.board[0][2] &&
      this.board[0][0] !== ""
    ) {
      return "X";
    }

    return null;
  }
}

module.exports = TicTacToe;

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
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2] &&
        this.board[i][0] !== ""
      ) {
        return this.board[i][0];
      }
    }

    return null;
  }
}

module.exports = TicTacToe;

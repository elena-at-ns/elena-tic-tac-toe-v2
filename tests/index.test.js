const TicTacToe = require("../src/index");

describe("Index.js", () => {
  test("initializes a 3x3 board", () => {
    const game = new TicTacToe();
    expect(game.board).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  test("allows a player to play a turn", () => {
    const game = new TicTacToe();
    game.playTurn(0, 0, "X");
    expect(game.board[0][0]).toBe("X");
  });
});

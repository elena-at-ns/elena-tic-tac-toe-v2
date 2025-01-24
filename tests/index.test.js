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

  test("first player X wins by completing the first row", () => {
    const game = new TicTacToe();
    game.playTurn(0, 0, "X");
    game.playTurn(1, 0, "O");
    game.playTurn(0, 1, "X");
    game.playTurn(2, 0, "O");
    game.playTurn(0, 2, "X");
    expect(game.checkWinner()).toBe("X");
  });

  test("if either player is a winner when completing any row", () => {
    const game = new TicTacToe();
    game.playTurn(1, 0, "X");
    game.playTurn(2, 0, "O");
    game.playTurn(1, 1, "X");
    game.playTurn(2, 1, "O");
    game.playTurn(0, 2, "X");
    game.playTurn(2, 2, "O");

    expect(game.checkWinner()).toBe("O");
  });

  test("if either player is a winner when completing any column", () => {
    const game = new TicTacToe();
    game.playTurn(0, 0, "X");
    game.playTurn(2, 1, "O");
    game.playTurn(1, 0, "X");
    game.playTurn(2, 2, "O");
    game.playTurn(2, 0, "X");
    expect(game.checkWinner()).toBe("X");
  });

  test("detects a win in the first diagonal", () => {
    const game = new TicTacToe();
    game.playTurn(0, 0, "X");
    game.playTurn(2, 1, "O");
    game.playTurn(1, 1, "X");
    game.playTurn(2, 0, "O");
    game.playTurn(2, 2, "X");
    expect(game.checkWinner()).toBe("X");
  });

  test("detects a game draw", () => {
    const game = new TicTacToe();
    game.playTurn(0, 0, "X");
    game.playTurn(0, 1, "O");
    game.playTurn(0, 2, "X");
    game.playTurn(1, 0, "X");
    game.playTurn(1, 1, "X");
    game.playTurn(1, 2, "O");
    game.playTurn(2, 0, "O");
    game.playTurn(2, 1, "X");
    game.playTurn(2, 2, "O");
    expect(game.isDraw()).toBe(true);
    expect(game.checkWinner()).toBe(null);
  });

  test("alternate between players until there is a winner or a draw", () => {
    const game = new TicTacToe();
    game.play();
    const winner = game.checkWinner();
    const isDraw = game.isDraw();
    expect(winner || isDraw).toBeTruthy();
  });
});

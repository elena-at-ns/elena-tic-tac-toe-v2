const { add } = require("../src/index.js");

describe("Index.js", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

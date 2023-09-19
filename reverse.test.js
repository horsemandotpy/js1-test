const reverse = require("./reverse");

describe("description", () => {
  test("Reverse array function ", () => {
    const result1 = reverse([1, 2, 3]);
    const expect1 = [3, 2, 1];
    expect(result1).toEqual(expect1);

    const result2 = reverse(["a", "b", "c"]);
    const expect2 = ["c", "b", "a"];
    expect(result2).toEqual(expect2);
  });
});

const chunk = require("./chunk");

describe("Chunk array by target number", () => {
  const result = chunk(["a", "b", "c", "d"], 2);
  const expect1 = [["a", "b"], ["c", "d"]];
  expect(result).toEqual(expect1);
});

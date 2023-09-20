const uniq = require("./uniq");

test("Return unique elemen in array", () => {
  const result = uniq([1, 2, 3, 2, 4]);
  const expect1 = [1, 2, 3, 4];
  expect(result).toEqual(expect1);

  const result2 = uniq(["a", "b", "b", "c", "d"]);
  const expect2 = ["a", "b", "c", "d"];
  expect(result2).toEqual(expect2);
});

const bubbleSortCount = require("./bubbleSortCount");

test("Count bubble sort sort number", () => {
  const result = bubbleSortCount([3, 1, 4, 2, 6, 5]);
  const expect1 = 4;
  expect(result).toBe(expect1);
  
  const result2 = bubbleSortCount([3, 1, 4, 2, 5, 6]);
  const expect2 = 3;
  expect(result2).toBe(expect2);
  
  const result3 = bubbleSortCount([3, 1, 4, 2, 5, 6, 7]);
  const expect3 = 3;
  expect(result3).toBe(expect3);
});

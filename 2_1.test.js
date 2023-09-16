const bubblesort_second = require("./2_1");

test("returns the second largest number in the list", () => {
  expect(bubblesort_second([10, 20, 4])).toBe(10);
  expect(bubblesort_second([70, 11, 20, 4, 100])).toBe(70);
  expect(bubblesort_second([1, 1, 1])).toBe(null);
  expect(bubblesort_second([1])).toBe(null);
});

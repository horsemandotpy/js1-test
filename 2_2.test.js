// Test
const selection_sort_second = require("./2_2");

test("returns the longest word in the list", () => {
  expect(selection_sort_second(["apple", "banana", "pear"])).toBe("banana");
  expect(selection_sort_second(["cat", "dog", "elephant"])).toBe("elephant");
  expect(selection_sort_second(["hello", "world"])).toBe("hello");
  expect(selection_sort_second(["a", "bb", "ccc"])).toBe("ccc");
});

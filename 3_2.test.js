const { combineOfTwo, diff_two, largest_diff } = require("./3_2");

describe("Return biggest diff between any two number ", () => {
  describe("Create all 2 elemen combination in array", () => {
    test("Array of two number", () => {
      const result = combineOfTwo([1, 2, 3]);
      const expected = [
        [1, 2],
        [1, 3],
        [2, 3],
      ];
      expect(result).toEqual(expected);
    });

    test("Array of three number", () => {
      const result = combineOfTwo([1, 2, 3, 4]);
      const expected = [
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
      ];
      expect(result).toEqual(expected);
    });
  });

  test("Different of two in array", () => {
    const result = diff_two([1, 2]);
    const expected = 1;
    expect(result).toBe(expected);

    const result2 = diff_two([3, 4]);
    const expected2 = 1;
    expect(result2).toBe(expected2);
  });

  describe("Return maximum diff of two number", () => {
    test("Number with positive interger", () => {
      const result = largest_diff([1, 2, 91, 9, 100]);
      const expected = 99;
      expect(result).toBe(expected);
     
      const result2 = largest_diff([1, 2, 90, 9, 100]);
      const expected2 = 99;
      expect(result2).toBe(expected2);
      
      const result3 = largest_diff([2, 3, 90, 9, 100]);
      const expected3 = 98;
      expect(result3).toBe(expected3);
    });
    
  });
});

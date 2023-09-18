const longest_increase_subseq = require("./3_3");

describe("Longest increasing subsequence in Array", () => {
  test("Longest subseq in the first part of array", () => {
    const result = longest_increase_subseq([5, 6, 7, 1, 2]);
    const expected = 3;
    expect(result).toBe(expected);

    const result2 = longest_increase_subseq([7, 8, 9, 5, 6]);
    const expected2 = 3;
    expect(result2).toBe(expected2);
  });

  test("Longest subseq in the last part of array", () => {
    const result = longest_increase_subseq([80, 50, 7, 10, 12]);
    const expected = 3;
    expect(result).toBe(expected);

    const result2 = longest_increase_subseq([59, 64, 72, 6, 8, 9]);
    const expected2 = 3;
    expect(result2).toBe(expected2);
  });

  test("Longest subseq in the middle part of array", () => {
    const result = longest_increase_subseq([9, 5, 8, 10, 7, 1, 2]);
    const expected = 3;
    expect(result).toBe(expected);

    const result2 = longest_increase_subseq([22, 23, 5, 6, 7, 1, 2]);
    const expected2 = 3;
    expect(result2).toBe(expected2);
  });
  
  test("Longest subseq in the various part of array", () => {
    const result = longest_increase_subseq([3, 10, 2, 1, 20]);
    const expected = 3;
    expect(result).toBe(expected);

    const result2 = longest_increase_subseq([50, 3, 10, 7, 40, 80]);
    const expected2 = 4;
    expect(result2).toBe(expected2);
  });
});

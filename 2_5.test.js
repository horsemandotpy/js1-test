const largest_subarr_sum = require("./2_5");

describe("Largest Subarray Sum Problem", () => {
  test("With positive interger only", () => {
    const test = largest_subarr_sum([1, 2, 3]);
    const result = 5;
    expect(test).toBe(result);

    const test3 = largest_subarr_sum([3, 2, 3, 1]);
    const result3 = 8;
    expect(test3).toBe(result3);

    const test2 = largest_subarr_sum([3, 2, 3]);
    const result2 = 5;
    expect(test2).toBe(result2);
  });

  test("With negative interger", () => {
    const test = largest_subarr_sum([-2, -3, 4, -1, -2, 1, 5, -3]);
    const result = 7;
    expect(test).toBe(result);

    const test2 = largest_subarr_sum([-2, -3, 4, 0, -2, 1, 5, -3]);
    const result2 = 8;
    expect(test2).toBe(result2);
  });
});

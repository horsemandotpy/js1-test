const second_smallest = require("./3_1");

describe("Second smallest number in array", () => {
  test("Array with negative interger", () => {
    const test = second_smallest([4, -3, 2, 1]);
    const result = 1;
    expect(test).toBe(result);

    const test2 = second_smallest([5, -4, 3, 2]);
    const result2 = 2;
    expect(test2).toBe(result2);
  });
  
  test("Array with positive interger", () => {
    const test = second_smallest([4, 3, 2, 1]);
    const result = 2;
    expect(test).toBe(result);

    const test2 = second_smallest([5, 4, 3, 2]);
    const result2 = 3;
    expect(test2).toBe(result2);
  });
});

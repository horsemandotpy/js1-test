const fizzBuzzSum = require("./2_4");

describe("Test function return sum of sum fizzbuzz", () => {
  test("Array only have one fizzBuzz", () => {
    const test1 = fizzBuzzSum([1, 3, 5, 15]);
    const result1 = 15;
    expect(test1).toBe(result1);

    const test2 = fizzBuzzSum([15, 3, 5, 1]);
    const result2 = 15;
    expect(test2).toBe(result2);

    const test3 = fizzBuzzSum([1, 30, 5, 12]);
    const result3 = 30;
    expect(test3).toBe(result3);
  });

  test("Array have many fizzBuzz", () => {
    const test = fizzBuzzSum([15, 30, 6, 8, 9])
    const result = 45;
    expect(test).toBe(result);

    
    const test2 = fizzBuzzSum([15, 30, 6, 8, 90])
    const result2 = 135;
    expect(test2).toBe(result2);
  })
  
});

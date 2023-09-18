const longestSubstr = require("./2_3");

describe("returns the longest common subsequence of two strings", () => {
  test("string contain only string type", () => {
    expect(longestSubstr("ABCDEF", "ABXYZCDEF")).toBe("CDEF");
    expect(longestSubstr("aaaa", "aa")).toBe("aa");
  });

  test("string contain comma, space", () => {
    expect(longestSubstr("Hello World", " World")).toBe(" World");
    expect(longestSubstr("aa,aa", "aa,dddd")).toBe("aa,");
  });

  test("string with reverse order ", () => {
    const test1 = longestSubstr("12345", "54321");
    const result1 = "";

    expect(test1).toBe(result1);

    const test2 = longestSubstr("12345", "543212");
    const result2 = "12";

    expect(test2).toBe(result2);
  });
});

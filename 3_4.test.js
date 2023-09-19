const {
  create_anagrams,
  overlap_of_two,
  maximumOverlapString,
} = require("./3_4");

describe("Return two longest overlap string", () => {
  describe("Create all possible pair in array", () => {
    test("Create pair of strings", () => {
      const result = create_anagrams(["a", "b", "c"]);
      const expect1 = [
        ["a", "b"],
        ["a", "c"],
        ["b", "c"],
      ];
      expect(result).toEqual(expect1);

      const result2 = create_anagrams(["d", "b", "c"]);
      const expect2 = [
        ["d", "b"],
        ["d", "c"],
        ["b", "c"],
      ];
      expect(result2).toEqual(expect2);
    });
  });

  describe("Count overlap score of two string", () => {
    test("Case of two equal length string", () => {
      const result = overlap_of_two(["ab", "ba"]);
      const expect1 = 2;
      expect(result).toBe(expect1);

      const result2 = overlap_of_two(["abc", "cab"]);
      const expect2 = 3;
      expect(result2).toBe(expect2);
    });

    test("Case of two unequal length string", () => {
      const result = overlap_of_two(["dabc", "bac"]);
      const expect1 = 3;
      expect(result).toBe(expect1);

      const result2 = overlap_of_two(["abce", "fcabd"]);
      const expect2 = 3;
      expect(result2).toBe(expect2);

      const result3 = overlap_of_two(["fobaro", "barfoos"]);
      const expect3 = 6;
      expect(result3).toBe(expect3);
    });

    describe("Return 2 string that have maximum number of overlap", () => {
      test("String with only onpair have the maximum number", () => {
        const result1 = maximumOverlapString([
          "hello",
          "world",
          "foobar",
          "barfoo",
          "he",
          "llo",
        ]);
        const expect1 = ["foobar", "barfoo"];
        expect(result1).toEqual(expect1);
      });
    });
  });
});

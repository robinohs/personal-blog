import {
  generateStringWithGivenCountOfWords,
  generateRandomWord,
} from "@utils/testUtilities";

describe("generateStringWithGivenCountOfWords", () => {
  it("Negative word count results in empty string.", () => {
    const expected = "";
    const actual = generateStringWithGivenCountOfWords(-2);
    expect(actual).toBe(expected);
  });

  it.each([[42], [2], [6], [0], [4], [300]])(
    "Word count %p has right count of words.",
    (length: number) => {
      const expected = length;
      const actual = generateStringWithGivenCountOfWords(length)
        .split(" ")
        .filter((val) => val !== "").length;
      expect(actual).toBe(expected);
    }
  );
});

describe("generateRandomWord", () => {
  it("Negative length results in empty string.", () => {
    const expected = "";
    const actual = generateRandomWord(-2);
    expect(actual).toBe(expected);
  });

  it.each([[42], [2], [6], [0], [4]])(
    "Length %p results in right word length.",
    (length: number) => {
      const expected = length;
      const actual = generateRandomWord(length).length;
      expect(actual).toBe(expected);
    }
  );
});

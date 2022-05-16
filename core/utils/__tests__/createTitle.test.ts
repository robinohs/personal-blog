import createTitle from "@utils/createTitle";

describe("createTitle", () => {
  it("Renders title correctly for undefined.", () => {
    const expected = "Blog@Roboh97";
    const actual = createTitle(undefined);
    expect(actual).toBe(expected);
  });

  it("Renders title correctly for empty string.", () => {
    const expected = "Blog@Roboh97";
    const actual = createTitle(undefined);
    expect(actual).toBe(expected);
  });

  it("renders title correctly for given name.", () => {
    const expected = "Blog@Roboh97 - PageName";
    const actual = createTitle("PageName");
    expect(actual).toBe(expected);
  });
});

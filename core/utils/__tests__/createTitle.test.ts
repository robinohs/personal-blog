import createTitle from "@utils/createTitle";

describe("createTitle", () => {
  it("Renders title correctly for undefined.", () => {
    const expected = "Robin Ohs";
    const actual = createTitle(undefined);
    expect(actual).toBe(expected);
  });

  it("Renders title correctly for empty string.", () => {
    const expected = "Robin Ohs";
    const actual = createTitle(undefined);
    expect(actual).toBe(expected);
  });

  it("renders title correctly for given name.", () => {
    const expected = "Robin Ohs - PageName";
    const actual = createTitle("PageName");
    expect(actual).toBe(expected);
  });
});

import { render, screen } from "@testing-library/react";
import { generateStringWithGivenCountOfWords } from "@utils/testUtilities";
import ReadingTimeIndicator from "./ReadingTimeIndicator";

describe("Welcome component", () => {
  it("Short text(<200) has 1 minute reading time.", () => {
    render(
      <ReadingTimeIndicator text={generateStringWithGivenCountOfWords(50)} />
    );
    expect(screen.getByText("1 minutes to read")).toBeDefined();
  });
  it("Long text(=200) has 1 minute reading time.", () => {
    render(
      <ReadingTimeIndicator text={generateStringWithGivenCountOfWords(200)} />
    );
    expect(screen.getByText("1 minutes to read")).toBeDefined();
  });
  it("Long text(=400) has 2 minute reading time.", () => {
    render(
      <ReadingTimeIndicator text={generateStringWithGivenCountOfWords(400)} />
    );
    expect(screen.getByText("2 minutes to read")).toBeDefined();
  });
  it("Long text(=500) has 3 minute reading time.", () => {
    render(
      <ReadingTimeIndicator text={generateStringWithGivenCountOfWords(500)} />
    );
    expect(screen.getByText("3 minutes to read")).toBeDefined();
  });
});

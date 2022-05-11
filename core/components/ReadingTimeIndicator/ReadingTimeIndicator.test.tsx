import { render, screen } from "@testing-library/react";
import ReadingTimeIndicator from "./ReadingTimeIndicator";

const fiftyWordsLongText =
  "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1";

describe("Welcome component", () => {
  it("Short text(<200) has 1 minute reading time.", () => {
    render(<ReadingTimeIndicator text={fiftyWordsLongText} />);
    expect(screen.getByText("1 minutes to read")).toBeDefined();
  });
  it("Long text(=200) has 1 minute reading time.", () => {
    render(
      <ReadingTimeIndicator
        text={
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText
        }
      />
    );
    expect(screen.getByText("1 minutes to read")).toBeDefined();
  });
  it("Long text(=400) has 2 minute reading time.", () => {
    render(
      <ReadingTimeIndicator
        text={
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText
        }
      />
    );
    expect(screen.getByText("2 minutes to read")).toBeDefined();
  });
  it("Long text(=300) has 3 minute reading time.", () => {
    render(
      <ReadingTimeIndicator
        text={
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText +
          fiftyWordsLongText
        }
      />
    );
    expect(screen.getByText("3 minutes to read")).toBeDefined();
  });
});

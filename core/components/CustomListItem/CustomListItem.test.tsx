import { render, screen } from "@testing-library/react";
import CustomListItem from "./CustomListItem";

describe("Welcome component", () => {
  it("CustomListItem text is rendered.", () => {
    render(<CustomListItem text="Frameworks" experience="Basics" href="#" />);
    expect(screen.getByText("Frameworks")).toBeDefined();
  });

  it("CustomListItem experience is rendered.", () => {
    render(<CustomListItem text="Frameworks" experience="Basics" href="#" />);
    expect(screen.getByText("Basics")).toBeDefined();
  });
});

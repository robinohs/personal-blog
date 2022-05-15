import { Text } from "@mantine/core";
import { render, screen } from "@testing-library/react";
import ItemList from "./ItemList";

describe("Welcome component", () => {
  it("ItemList label is rendered.", () => {
    render(<ItemList label="Frameworks" />);
    expect(screen.getByText("Frameworks")).toBeDefined();
  });

  it("ItemList single children is rendered.", () => {
    render(
      <ItemList label="Tech">
        <Text>Children1</Text>
      </ItemList>
    );
    expect(screen.getByText("Tech")).toBeDefined();
    expect(screen.getByText("Children1")).toBeDefined();
  });

  it("ItemList multiple children are rendered.", () => {
    render(
      <ItemList label="Tools">
        <Text>Children1</Text>
        <Text>Children2</Text>
      </ItemList>
    );
    expect(screen.getByText("Tools")).toBeDefined();
    expect(screen.getByText("Children1")).toBeDefined();
    expect(screen.getByText("Children2")).toBeDefined();
  });
});

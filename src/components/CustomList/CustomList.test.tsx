import renderer from "react-test-renderer";
import { CustomList } from "./CustomList";
import React from "react";
import { render, screen } from "@testing-library/react";

test("CustomList snapshot test", () => {
  const compTree = renderer.create(<CustomList label="Custom list:" items={["item 1", "item 2"]} />).toJSON();
  expect(compTree).toMatchSnapshot();
});

test("CustomList snapshot test with clear all", () => {
  const compTree = renderer
    .create(<CustomList label="Custom list:" items={["item 1", "item 2"]} showClearAll onClearAllClicked={() => console.log("Clear all clicked")} />)
    .toJSON();
  expect(compTree).toMatchSnapshot();
});

test("CustomList does render clear all", () => {
  render(<CustomList label="Custom list:" items={["item 1", "item 2"]} showClearAll onClearAllClicked={() => console.log("Clear all clicked")} />);

  const clearAllButton = screen.getByTestId("clearAllButton");
  expect(clearAllButton).toBeInTheDocument();
});

import React from "react";
import { SectionHeading } from "./SectionHeading";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";

test("Section heading is rendered correctly", () => {
  const compTree = renderer.create(<SectionHeading label="heading" />).toJSON();

  expect(compTree).toMatchSnapshot();
});

test("Section heading is rendered correctly with selected", () => {
  const compTree = renderer.create(<SectionHeading label="heading" selected />).toJSON();

  expect(compTree).toMatchSnapshot();
});

test("Section heading click triggers the callback function", async () => {
  const obj = {
    clickCallback: function () {
      console.log("click callback called");
    },
  };
  jest.spyOn(obj, "clickCallback");

  render(<SectionHeading label="heading" selected onClick={obj.clickCallback} />);
  const testElement = await screen.findByText("heading");
  expect(testElement).toBeInTheDocument();

  fireEvent.click(testElement);
  expect(obj.clickCallback).toHaveBeenCalled();
});

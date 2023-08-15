import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import { TextArea } from "./TextArea";

test("Text area is rendered correctly", () => {
  const compTree = renderer
    .create(<TextArea label="Mutliline text" placeholder="Enter multi-line text" description="Enter atleast 200 characters" required />)
    .toJSON();

  expect(compTree).toMatchSnapshot();
});

test("Text area onchange triggers the callback function", async () => {
  const obj = {
    changeCallback: function () {
      console.log("change callback called");
    },
  };
  jest.spyOn(obj, "changeCallback");

  render(
    <TextArea
      label="Mutliline text"
      placeholder="Enter multi-line text"
      description="Enter atleast 200 characters"
      required
      onChange={obj.changeCallback}
    />
  );
  const textArea = screen.getByLabelText("Mutliline text");
  expect(textArea).toBeInTheDocument();

  fireEvent.change(textArea, { target: { value: "multi-line text value" } });
  expect(obj.changeCallback).toHaveBeenCalled();
});

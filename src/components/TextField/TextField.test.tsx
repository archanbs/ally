import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

test("Text field is rendered correctly", () => {
  const compTree = renderer
    .create(
      <TextField
        label="textfield"
        placeholder="Enter input"
        description="Enter input"
        required
        id="textfield-1"
        onChange={() => console.log("onchange")}
      />
    )
    .toJSON();

  expect(compTree).toMatchSnapshot();
});

test("Text field onchange triggers the callback function", async () => {
  const obj = {
    changeCallback: function () {
      console.log("change callback called");
    },
  };
  jest.spyOn(obj, "changeCallback");

  render(
    <TextField label="Text field" placeholder="Enter input" description="Enter input" required id="textfield-1" onChange={obj.changeCallback} />
  );
  const textField = screen.getByLabelText("Text field");
  expect(textField).toBeInTheDocument();

  fireEvent.change(textField, { target: { value: "text value" } });
  expect(obj.changeCallback).toHaveBeenCalled();
});

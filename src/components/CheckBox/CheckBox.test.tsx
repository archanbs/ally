import renderer from "react-test-renderer";
import { CheckBox } from "./CheckBox";
import React from "react";

test("CheckBox snapshot test", () => {
  const compTree = renderer.create(<CheckBox label="Check box" checked={true} id="check-box" />).toJSON();
  expect(compTree).toMatchSnapshot();
});

test("CheckBox snapshot test with not checked", () => {
  const compTree = renderer.create(<CheckBox label="Check box" checked={false} id="check-box" />).toJSON();
  expect(compTree).toMatchSnapshot();
});

import renderer from "react-test-renderer";
import { Button } from "./Button";
import React from "react";

test("Button snapshot test", () => {
  const compTree = renderer.create(<Button type="button" id="test" text="Button" className="font-bold" />).toJSON();
  expect(compTree).toMatchSnapshot();
});

test("Button snapshot test with children", () => {
  const compTree = renderer
    .create(<Button type="button" id="test" text="Button" className="text-[10px]" children={<span>Test child</span>} />)
    .toJSON();
  expect(compTree).toMatchSnapshot();
});

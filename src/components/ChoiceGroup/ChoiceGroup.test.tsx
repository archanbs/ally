import renderer from "react-test-renderer";
import React from "react";
import { ChoiceGroup, IChoiceOption } from "./ChoiceGroup";

test("Choice group snapshot test", () => {
  const options: IChoiceOption[] = [{ key: "1", value: "Choice 1" }];
  const compTree = renderer
    .create(<ChoiceGroup label="Choice group" options={options} onChange={() => console.log("choice change")} selectedKey="1" />)
    .toJSON();
  expect(compTree).toMatchSnapshot();
});

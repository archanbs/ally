import React from "react";

export type IChoiceGroupProps = {
  label: string;
  options: IChoiceOption[];
  selectedKey: string;
  onChange: (selected: IChoiceOption) => void;
};

export type IChoiceOption = {
  key: string;
  value: string;
};

export const ChoiceGroup = ({ label, options, selectedKey, onChange }: IChoiceGroupProps) => {
  const name = label.split(" ").join("-");
  return (
    <div>
      <label className="font-semibold my-2">{label}</label>
      <br />
      {options.map(({ key, value }, index) => {
        return (
          <div key={key + index}>
            <input
              type="radio"
              id={key}
              name={name}
              value={value}
              onChange={(ev) => {
                ev.preventDefault();
                console.log("onChange triggered");
                onChange({ key: key, value: value });
              }}
              checked={key === selectedKey}
            />
            <label className="m-2" htmlFor={key}>
              {value}
            </label>
            <br />
          </div>
        );
      })}
      <br />
    </div>
  );
};

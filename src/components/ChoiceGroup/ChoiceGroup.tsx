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
  checked?: boolean;
};

export const ChoiceGroup = ({ label, options, selectedKey, onChange }: IChoiceGroupProps) => {
  const name = label.split(" ").join("-");

  return (
    <div>
      <label className="font-semibold my-2">{label}</label>
      <br />
      {options.map(({ key, value }) => {
        return (
          <div key={key}>
            <input
              type="radio"
              id={key}
              name={name}
              value={value}
              onChange={(ev) => {
                ev.preventDefault();
                console.log("onChange triggered", key, selectedKey);
                onChange({ key: key, value: value });
              }}
              checked={key === selectedKey}
            />
            <label className="m-2" htmlFor={key}>
              {value}
            </label>
          </div>
        );
      })}
      <br />
    </div>
  );
};

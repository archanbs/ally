import React from "react";

export interface ICheckBoxProps {
  id?: string;
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked?: boolean) => void;
}

export const CheckBox = ({ label, defaultChecked, id, onChange }: ICheckBoxProps) => {
  const [checked, setChecked] = React.useState(defaultChecked || false);

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setChecked(!checked);
        onChange(!checked);
      }}
    >
      <input className="mr-2 cursor-pointer" type="checkbox" id={id} value={label} />
      <label className="cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

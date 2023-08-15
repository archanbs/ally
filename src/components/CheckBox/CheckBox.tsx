import React from "react";

export interface ICheckBoxProps {
  id?: string;
  label: string;
  checked: boolean;
  onChange?: (checked?: boolean) => void;
}

export const CheckBox = ({ checked, label, id, onChange }: ICheckBoxProps) => {
  return (
    <div>
      <label className="cursor-pointer w-[100%]">
        <input
          className="mr-2 cursor-pointer"
          type="checkbox"
          id={id}
          value={label}
          checked={checked}
          onChange={() => {
            onChange(!checked);
          }}
        />
        {label}
      </label>
    </div>
  );
};

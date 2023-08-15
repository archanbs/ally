import React from "react";

export type ITextAreaProps = {
  label: string;
  id?: string;
  placeholder?: string;
  description?: string;
  textValue?: string;
  required?: boolean;
  onChange?: (val: string) => void;
};

export const TextArea = ({ label, id, placeholder, description, textValue, required, onChange }: ITextAreaProps) => {
  const defaultId = id ?? label.split(" ").join("-");

  return (
    <div className="mt-4">
      <label className="font-semibold" htmlFor={defaultId}>
        {label}
      </label>
      <br />
      <textarea
        id={defaultId}
        name={defaultId}
        className="border border-gray-400 p-2 rounded text-[14px]"
        rows={4}
        cols={40}
        placeholder={placeholder}
        required={required}
        value={textValue}
        onChange={(ev) => {
          ev.preventDefault();
          onChange(ev.target.value);
        }}
      />
      <br />
      <span className="text-[12px] text-[#4f4f4f]">{description}</span>
      <br />
      <br />
    </div>
  );
};

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

export const TextArea = ({ label, id, placeholder, description, textValue, required, onChange }: ITextAreaProps) => (
  <div className="mt-4">
    <label className="font-semibold" htmlFor={id}>
      {label}
    </label>
    <br />
    <textarea
      id={id}
      name={id}
      className="border border-gray-400 px-1 rounded"
      rows={4}
      cols={40}
      placeholder={placeholder}
      required={required}
      value={textValue}
      onChange={(ev) => {
        ev.preventDefault();
        onChange(ev.target.innerText);
      }}
    />
    <br />
    <span className="text-[12px] text-[#4f4f4f]">{description}</span>
    <br />
    <br />
  </div>
);

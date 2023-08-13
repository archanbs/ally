import React from "react";

export type ITextFieldProps = {
  label: string;
  id: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  suffix?: string;
  type?: "text" | "number";
  width?: number;
  description?: string;
  onChange: (val: string) => void;
  min?: number;
  max?: number;
  step?: number;
  errorMessage?: string;
};

export const TextField = ({
  label,
  id,
  placeholder,
  value,
  required,
  type,
  suffix,
  width,
  description,
  onChange,
  min,
  max,
  step,
  errorMessage,
}: ITextFieldProps) => (
  <div className="mb-4">
    <label className="font-semibold" htmlFor={id}>
      {label}
    </label>
    <br />
    <input
      id={id}
      name={id}
      className="border border-gray-400 p-1 px-2 rounded mr-1"
      style={{ width: `${width}px` }}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(ev) => {
        ev.preventDefault();
        onChange(ev.target.innerHTML);
      }}
      min={min}
      max={max}
      step={step}
    />
    <span>{suffix}</span>
    <br />
    {description && <div className="text-[12px] text-[#4f4f4f]">{description}</div>}
    {errorMessage && <span className="text-[12px] text-[red]">{errorMessage}</span>}
  </div>
);

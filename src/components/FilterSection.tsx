import React from "react";

export interface IFilterSectionProps {
  label: string;
  children?: React.ReactNode;
}

export const FilterSection = ({ label, children }: IFilterSectionProps) => {
  return (
    <div className="p-4 border-t border-t-gray-300 pl-0">
      <label className="text-[14px] font-semibold text-textColor mb-2">{label}</label>
      <div>{children}</div>
    </div>
  );
};

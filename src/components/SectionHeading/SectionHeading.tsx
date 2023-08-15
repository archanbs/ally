import React from "react";

export type SectionHeadingProps = {
  label: string;
  selected?: boolean;
  id?: string;
  onClick?: () => void;
};

export const SectionHeading = ({ label, selected, id, onClick }: SectionHeadingProps) => {
  const customStyle = {
    borderRight: "none",
  };

  return (
    <div
      className="py-4 border-b border-r border-gray-300"
      style={selected ? customStyle : undefined}
      id={id}
      onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}
    >
      {label}
    </div>
  );
};

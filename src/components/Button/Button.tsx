import React from "react";
import "./Button.css";

export interface IButtonProps {
  id?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (ev) => void;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export const Button = function ({ id, text, onClick, type, className, children }: IButtonProps) {
  const onButtonClick = (ev) => {
    console.log("Button clicked");
    ev.preventDefault();
    onClick?.(ev);
  };

  return (
    <button id={id} className={`global-button${className !== undefined ? ` ${className}` : ""}`} type={type} onClick={onButtonClick}>
      {text}
      {children}
    </button>
  );
};

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export type CustomListProps = {
  label: string;
  items: string[];
  onItemClicked?: (itemName: string, index: number) => void;
  showClearAll?: boolean;
  onClearAllClicked?: () => void;
};

export const CustomList = ({ label, items, onItemClicked, onClearAllClicked, showClearAll }: CustomListProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div>{label}</div>
      <ul className="flex gap-1 flex-wrap">
        {items.map((itemName, index) => {
          return (
            <li
              className="p-1 px-2 text-[12px] my-2 rounded-2xl bg-themeBlue text-center text-white flex"
              style={{ cursor: onItemClicked ? "pointer" : "auto" }}
              key={`filter-${index}`}
              onClick={(ev) => {
                console.log("remove item", itemName);
                ev.preventDefault();
                onItemClicked?.(itemName, index);
              }}
              tabIndex={1}
            >
              {itemName}
              <AiOutlineClose className="self-center ml-2" />
            </li>
          );
        })}
      </ul>
      {showClearAll && onClearAllClicked && (
        <div
          data-testId="clearAllButton"
          className="flex text-[#1560bd] cursor-pointer"
          onClick={(ev) => {
            ev.preventDefault();
            onClearAllClicked();
          }}
          tabIndex={1}
        >
          Clear all
        </div>
      )}
    </div>
  );
};

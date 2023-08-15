import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

export interface IPaginationProps {
  selectedPage?: number;
  pageSize?: number;
  totalItemCount?: number;
  gotoPage: (page: number) => void;
}

export const Pagination = ({ selectedPage, pageSize, totalItemCount, gotoPage }: IPaginationProps) => {
  const [currentPage, setCurrentPage] = React.useState(selectedPage || 1);

  const pageCount = Math.ceil(totalItemCount / pageSize);

  const pageClicked = (ev, pageNumber) => {
    ev.preventDefault();
    setCurrentPage(pageNumber);
    gotoPage(pageNumber);
  };

  return (
    <div className="flex m-4 items-center justify-center gap-2 text-themeBlue ">
      <button className="hover:bg-[#B9D9EB] p-2 px-4 rounded-2xl" onClick={(ev) => pageClicked(ev, 1)}>
        First
      </button>

      <button className="flex gap-1 items-center hover:bg-[#B9D9EB] p-2 rounded-2xl" onClick={(ev) => pageClicked(ev, currentPage - 1)}>
        <FcPrevious />
        Previous
      </button>

      <ul className="flex gap-2">
        <li className="bg-lightBlue text-white w-6 h-6 rounded-2xl text-center">{currentPage}</li>
        <li className="bg-themeBlue text-white w-6 h-6 rounded-2xl text-center" onClick={(ev) => pageClicked(ev, currentPage + 1)}>
          {currentPage + 1}
        </li>
        <li className="bg-themeBlue text-white w-6 h-6 rounded-2xl text-center" onClick={(ev) => pageClicked(ev, currentPage + 2)}>
          {currentPage + 2}
        </li>
      </ul>
      <span>...</span>
      <button className="flex gap-1 items-center hover:bg-[#B9D9EB] p-2 rounded-2xl" onClick={(ev) => pageClicked(ev, currentPage + 1)}>
        Next
        <FcNext />
      </button>
      <button className="hover:bg-[#B9D9EB] p-2 px-4 rounded-2xl" onClick={(ev) => pageClicked(ev, pageCount)}>
        Last
      </button>
    </div>
  );
};

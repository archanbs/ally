import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

export const Pagination = () => {
  return (
    <div className="flex m-4 items-center justify-center gap-2 text-themeBlue ">
      <button className="hover:bg-[#B9D9EB] p-2 px-4 rounded-2xl">First</button>
      <button className="flex gap-1 items-center hover:bg-[#B9D9EB] p-2 rounded-2xl">
        <FcPrevious />
        Previous
      </button>

      <ul className="flex gap-2">
        <li className="bg-themeBlue text-white w-6 h-6 rounded-2xl text-center">1</li>
        <li className="bg-themeBlue text-white w-6 h-6 rounded-2xl text-center">2</li>
        <li className="bg-themeBlue text-white w-6 h-6 rounded-2xl text-center">3</li>
      </ul>
      <span>...</span>
      <button className="flex gap-1 items-center hover:bg-[#B9D9EB] p-2 rounded-2xl">
        Next
        <FcNext />
      </button>
      <button className="hover:bg-[#B9D9EB] p-2 px-4 rounded-2xl">Last</button>
    </div>
  );
};

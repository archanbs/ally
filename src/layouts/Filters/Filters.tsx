import React from "react";
import { CheckBox } from "../../components/CheckBox";
import { FilterSection } from "./FilterSection";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Filters = () => {
  const skills = ["JavaScript", "React.js", "Leadership", "Project Management", "Software Development", "Data Analysis"];

  return (
    <div className="max-h-full border-r-gray-400 border-r w-60">
      <h2 className="text-lg font-bold text-textColor m-4">Filter by</h2>

      <FilterSection label="Skills">
        <div className="w-[100%] px-2 my-2 border border-gray-400 rounded-2xl flex justify-center items-center gap-1">
          <BsSearch className="icon" />
          <input className="w-[100%] focus:outline-none" type="text" placeholder="Search skill"></input>
          <AiOutlineClose className="icon text-[20px]" />
        </div>
        <div>
          {skills.map((skill, index) => (
            <CheckBox key={`skill-${index}`} label={skill} id={skill} />
          ))}
        </div>
      </FilterSection>

      <FilterSection label="Salary per hour">
        <div>
          <label>min</label>
          <input type="number" className="w-16 border border-gray-400 m-2 rounded pl-2"></input>
          <span>$</span>
        </div>
        <div>
          <label>max</label>
          <input type="number" className="w-16 border border-gray-400 m-2 rounded pl-2"></input>
          <span>$</span>
        </div>
      </FilterSection>

      <FilterSection label="Job type">
        <CheckBox label="Fixed" id="fixed" />
        <CheckBox label="Hourly" id="hourly" />
      </FilterSection>
    </div>
  );
};

export default Filters;

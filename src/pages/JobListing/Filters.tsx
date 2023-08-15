import React, { useMemo } from "react";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { FilterSection } from "../../components/FilterSection";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { findSkills } from "../PostJob/utils/findSkills";
import debouce from "lodash.debounce";
import { getFiltersStore } from "./@data/store";
import { addSelectedSkill, removeSelectedSkill, setJobType, setMaxSalary, setMinSalary } from "./@data/mutatorActions";
import { observer } from "mobx-react";
import { JobType } from "../PostJob/@data/store";

const Filters = observer(() => {
  const defaultSkills = ["JavaScript", "React.js", "Leadership", "Project Management", "Software Development", "Data Analysis"];
  let [topSkills, setTopSkills] = React.useState(defaultSkills);
  const { selectedSkills, jobType, minSalary, maxSalary } = getFiltersStore();

  const [skillSearchVal, setSkillSearch] = React.useState("");

  const handleSearch = (searchValue) => {
    if (searchValue !== "") {
      setTopSkills(findSkills(searchValue));
    } else {
      setTopSkills(selectedSkills.concat(defaultSkills.filter((skill) => !selectedSkills.includes(skill))));
    }
  };

  const debouncedSearch = useMemo(() => {
    return debouce(handleSearch, 300);
  }, []);

  return (
    <div className="max-h-full border-r-gray-400 border-r w-60">
      <h2 className="text-lg font-bold text-textColor m-4">Filter by</h2>

      <FilterSection label="Skills">
        <div className="w-[100%] px-2 my-2 border border-gray-400 rounded-2xl flex justify-center items-center gap-1">
          <BsSearch className="icon" />
          <input
            className="w-[100%] focus:outline-none"
            type="text"
            placeholder="Search skill"
            value={skillSearchVal}
            onChange={(ev) => {
              ev.preventDefault();
              setSkillSearch(ev.target.value);
              debouncedSearch(ev.target.value);
            }}
          ></input>
          <AiOutlineClose
            className="icon text-[20px]"
            onClick={(ev) => {
              ev.preventDefault();
              setSkillSearch("");
              setTopSkills(defaultSkills);
            }}
          />
        </div>
        <div>
          {topSkills.map((skill, index) => (
            <CheckBox
              key={`skill-${index}`}
              label={skill}
              id={skill}
              checked={selectedSkills.includes(skill)}
              onChange={(checked) => {
                if (checked) {
                  addSelectedSkill(skill);
                } else {
                  removeSelectedSkill(skill);
                }
              }}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection label="Salary per hour">
        <div>
          <label htmlFor="minSalary">min</label>
          <input
            id="minSalary"
            type="number"
            className="w-16 border border-gray-400 m-2 rounded pl-2"
            onChange={(ev) => {
              ev.preventDefault();
              setMinSalary(Number(ev.target.value));
            }}
          />
          <span>$</span>
        </div>
        <div>
          <label htmlFor="maxSalary">max</label>
          <input
            id="maxSalary"
            type="number"
            className="w-16 border border-gray-400 m-2 rounded pl-2"
            onChange={(ev) => {
              ev.preventDefault();
              setMaxSalary(Number(ev.target.value));
            }}
          />
          <span>$</span>
        </div>
        {minSalary > maxSalary && <span className="text-[red]">{"Invalid filters"}</span>}
      </FilterSection>

      <FilterSection label="Job type">
        <CheckBox label="Fixed" id="fixed" onChange={() => setJobType(JobType.Fixed)} checked={jobType === JobType.Fixed} />
        <CheckBox label="Hourly" id="hourly" onChange={() => setJobType(JobType.Hourly)} checked={jobType === JobType.Hourly} />
      </FilterSection>
    </div>
  );
});

export default Filters;

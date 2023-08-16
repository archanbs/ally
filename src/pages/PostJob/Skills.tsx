import { observer } from "mobx-react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { findSkills } from "./utils/findSkills";
import { addSkill, clearAllSkills, removeSkill } from "./@data/mutatorActions";
import { getPostJobStore } from "./@data/store";
import { CustomList } from "../../components/CustomList/CustomList";

export const Skills = observer(() => {
  const [skills, setSkills] = React.useState([]);
  const [val, setVal] = React.useState("");
  const { skills: selectedSkills } = getPostJobStore();

  const clearFilters = () => {
    setVal("");
    setSkills([]);
  };
  React.useEffect(() => {
    console.log("Skills updated");
  }, [selectedSkills]);

  return (
    <>
      <label className="font-semibold">Enter skills that are required for the job</label>
      <div className="w-[100%] px-2 mt-4 border border-gray-400 rounded-2xl flex justify-center items-center gap-1">
        <BsSearch className="icon" />
        <input
          className="w-[100%] focus:outline-none h-10 px-2"
          type="text"
          placeholder="Search skill"
          value={val}
          onChange={(ev) => {
            ev.preventDefault();
            const searchVal = ev.target.value;
            setVal(searchVal);
            if (searchVal.length >= 3) {
              setSkills(findSkills(searchVal));
            }
          }}
        />
        <AiOutlineClose
          className="icon text-[20px]"
          onClick={(ev) => {
            ev.preventDefault();
            clearFilters();
          }}
          tabIndex={1}
        />
      </div>
      <div id="auto-completebox" className="z-10">
        {skills.map((skill, index) => (
          <div
            className="px-2 py-1 w-[100%] border cursor-pointer"
            key={`auto-complete-skill-${index}`}
            onClick={(ev) => {
              addSkill(skill);
              clearFilters();
            }}
            tabIndex={1}
          >
            <strong>{skill.substr(0, val.length)}</strong>
            {skill.substr(val.length)}
          </div>
        ))}
      </div>

      <div className="m-4 z-0">
        <CustomList
          label={"Selected skills: "}
          items={selectedSkills}
          onItemClicked={(skillName, index) => removeSkill(skillName)}
          onClearAllClicked={clearAllSkills}
        />
      </div>
    </>
  );
});

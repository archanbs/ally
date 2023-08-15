import React from "react";
import { IJobDetails } from "../../@data/models/JobDetails";

export interface IJobPostProps {
  job: IJobDetails;
}

export const JobPost = ({ job }: IJobPostProps) => {
  const getJobRelatedDetails = (): string => {
    const array = [];
    array.push(job.type === 2 ? "Hourly" : "Fixed");
    array.push(job.tierText);
    array.push(job.createdOn?.toString().split("T")[0]);

    return array.join(" | ");
  };

  const getSkills = (): string[] => {
    return job.attrs.map((attr) => attr.prettyName);
  };

  return (
    <div className="jobContainer w-full flex flex-col gap-5 justify-center flex-wrap p-4 border border-gray-200 rounded-md hover:bg-[#F0F8FF] cursor-pointer">
      <div className="text-textColor font-semibold text-[16px]  hover:text-themeBlue">{job.title}</div>
      <div className="text-textColor text-[14px]">{getJobRelatedDetails()}</div>
      <div className="text-textColor text-[12px]">{job.description}</div>
      <ul className="flex gap-1 flex-wrap">
        {getSkills().map((skillName, index) => {
          return (
            <li className="p-1 px-2 text-[12px] rounded-2xl bg-slate-300 text-center text-black" key={`skill-${job.uid}-${index}`}>
              {skillName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

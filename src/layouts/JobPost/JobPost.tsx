import React from "react";
import { IJobDetails } from "../../@data/Jobs/JobDetails";
import { getJobRelatedDetails } from "../../pages/JobListing/@data/utils/getJobRelatedDetails";
import { UserType } from "../../pages/LoginPage/LoginPage";
import { Button } from "../../components";
import { BsArrowUpRight } from "react-icons/bs";
import { JobToApplicantsMapping } from "../../@data/Jobs/jobsProcessing";

export interface IJobPostProps {
  job: IJobDetails;
  userType: UserType;
  showApplicants?: boolean;
}

export const JobPost = ({ job, userType, showApplicants }: IJobPostProps) => {
  const getSkills = (): string[] => {
    return job.attrs.map((attr) => attr.prettyName);
  };

  const jobApplicants = JobToApplicantsMapping[job.uid];

  return (
    <div className="jobContainer w-full flex flex-col gap-5 justify-center flex-wrap p-4 border border-gray-200 rounded-md hover:bg-[#F0F8FF]">
      <div className="flex justify-between">
        <div className="text-textColor font-semibold text-[16px]  hover:text-themeBlue self-center">{job.title}</div>
        {userType === UserType.Freelancer && (
          <Button
            className="border borer-gray-300 bg-lightBlue rounded-3xl flex gap-1 px-4"
            text="Quick Apply"
            onClick={() => {
              alert(`Successfully applied to job! - ${job.title}`);
            }}
          >
            <BsArrowUpRight className="self-center" />
          </Button>
        )}
        {userType === UserType.Employer && showApplicants && (
          <div className="flex gap-1">
            <label className="self-center">{`${jobApplicants?.length ?? 0} applicants`}</label>
            <Button
              className="border borer-gray-300 bg-lightBlue rounded-3xl flex gap-1 px-1"
              text="View"
              onClick={() => {
                // alert(`Successfully applied to job! - ${job.title}`);
                const url = `./viewApplicants?jobId=${job.uid}`;
                window.location.assign(url);
              }}
            >
              <BsArrowUpRight className="self-center" />
            </Button>
          </div>
        )}
      </div>
      <div className="text-textColor text-[14px]">{getJobRelatedDetails(job)}</div>
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

import React from "react";
import { getUsers } from "../../@data/Users/getUsers";
import { JobToApplicantsMapping } from "../../@data/Jobs/jobsProcessing";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { IUserProfile } from "../UserProfile/@data/store";
import { ReviewProfile } from "../UserProfile/ReviewProfile";

export const ViewApplicants = () => {
  const [applicants, setApplicants] = React.useState<IUserProfile[]>([]);
  const [applicant, setApplicant] = React.useState<IUserProfile>();

  React.useEffect(() => {
    const jobId = window.location.toString().split("jobId=")?.[1];

    const applicantIds = JobToApplicantsMapping[jobId];
    setApplicants(getUsers().filter((u) => applicantIds?.includes(u.id)));
    console.log(applicants);
  }, [window.location.toString()]);

  return (
    <div className="w-[100%]">
      <h2 className="font-semibold text-2xl text-center m-4">View applicants</h2>
      <hr />
      <div className="flex h-[85%]">
        <div className="w-[250px]">
          {applicants.length > 0 &&
            applicants.map((user) => (
              <SectionHeading id={user.name} selected={applicant?.id === user.id} label={user.name} onClick={() => setApplicant(user)} />
            ))}
        </div>

        <div className="pl-10 pt-10 flex flex-col">{applicant && <ReviewProfile {...applicant} />}</div>
      </div>
    </div>
  );
};

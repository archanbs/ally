import React from "react";
import { IJobDetails, getJobData } from "../../@data/models/JobDetails";
import { JobPost } from "../JobPost/JobPost";
import { Pagination } from "../Pagination/Pagination";
import { CustomList } from "../../components/CustomList";

const JobList = () => {
  const job: IJobDetails = getJobData();

  return (
    <div className="mx-8 my-4 w-full">
      <input className="border-gray-400 border rounded-md p-4 w-4/5 max-w-2xl mb-4" type="text" placeholder="Search by skill or job title" />
      <CustomList label={"Filters:"} getItems={() => ["Hourly"]} />

      {/* <div className="">Total items</div> */}

      <JobPost job={job} />
      <JobPost job={job} />
      <JobPost job={job} />
      <JobPost job={job} />
      <JobPost job={job} />
      <Pagination />
    </div>
  );
};

export default JobList;

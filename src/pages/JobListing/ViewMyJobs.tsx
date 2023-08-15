import React from "react";
import { fetchJobsForEmployer } from "../../@data/Employers/fetchJobs";
import Filters from "./Filters";
import FilteredJobs from "./FilteredJobs";

export const ViewMyJobs = () => {
  return (
    <>
      <Filters />
      <FilteredJobs viewMyJobs={true} myJobs={fetchJobsForEmployer()} />
    </>
  );
};

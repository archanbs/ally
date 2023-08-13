import React from "react";
import Filters from "../../layouts/Filters/Filters";
import JobList from "../../layouts/JobList/JobList";

export const JobListing = () => {
  return (
    <>
      <Filters />
      <JobList />
    </>
  );
};

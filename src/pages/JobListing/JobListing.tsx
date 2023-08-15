import React from "react";
import Filters from "./Filters";
import FilteredJobs from "./FilteredJobs";

export const JobListing = () => {
  return (
    <>
      <Filters />
      <FilteredJobs />
    </>
  );
};

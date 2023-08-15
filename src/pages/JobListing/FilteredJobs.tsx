import React, { useEffect, useState } from "react";
import { IJobDetails, getFilteredJobData, getJobsDataPaginated } from "../../@data/Jobs/JobDetails";
import { Pagination } from "../../layouts/Pagination/Pagination";
import { CustomList } from "../../components/CustomList/CustomList";
import { getFiltersStore } from "./@data/store";
import { clearAllFilters } from "./@data/mutatorActions";
import { observer } from "mobx-react";
import { JobType } from "../PostJob/@data/store";
import { fetchUserType } from "../../@data/utils/fetchUserType";
import { JobPost } from "../../layouts/JobPost/JobPost";

const PAGE_SIZE = 10;
const CURRENT_PAGE = 1;

export interface IFilteredJobsProps {
  viewMyJobs?: boolean;
  myJobs?: IJobDetails[];
}

const FilteredJobs = observer(({ viewMyJobs, myJobs }: IFilteredJobsProps) => {
  const [page, setPage] = useState(CURRENT_PAGE);
  const offset = PAGE_SIZE * (page - 1); // 0 initially
  const [totalItemCount, setTotalItemCount] = useState(500);
  const [jobs, setJobs] = useState(myJobs ? myJobs.slice(offset, offset + PAGE_SIZE) : getJobsDataPaginated(offset, PAGE_SIZE));

  const userType = fetchUserType();

  const { jobType, minSalary, maxSalary, selectedSkills } = getFiltersStore();
  const [filters, setFilters] = useState([]);

  console.log(myJobs ? myJobs.length : 0);

  useEffect(() => {
    updateFilters();
    setPage(1);
    updateJobs();
    console.log("updating filters", jobType, minSalary, maxSalary, selectedSkills);
    // eslint-disable-next-line
  }, [jobType, minSalary, maxSalary, selectedSkills.toString()]);

  const updateJobs = () => {
    console.log("updating jobs");
    const allJobs = getFilteredJobData(selectedSkills, jobType, minSalary, maxSalary, myJobs);
    setJobs(allJobs.slice(offset, PAGE_SIZE));
    console.log(allJobs.length);
    setTotalItemCount(allJobs.length);
  };

  const updateFilters = () => {
    let newFilters = [];
    if (jobType) {
      newFilters.push(jobType === JobType.Fixed ? "Fixed" : "Hourly");
    }
    if (minSalary) {
      newFilters.push(`Min salary: ${minSalary} $`);
    }
    if (maxSalary) {
      newFilters.push(`Min salary: ${maxSalary} $`);
    }
    newFilters = newFilters.concat(selectedSkills);
    console.log(newFilters);
    setFilters(newFilters);
  };

  return (
    <div className="mx-8 py-4 w-full">
      {/* <input className="border-gray-400 border rounded-md p-4 w-4/5 max-w-2xl mb-4" type="text" placeholder="Search by skill or job title" /> */}
      <CustomList label={"Filters:"} items={filters} showClearAll onClearAllClicked={clearAllFilters} />

      <div className="pb-2">{`Items ${offset + 1} - ${offset + PAGE_SIZE} out of ${totalItemCount}`}</div>

      {jobs.map((job, index) => (
        <JobPost key={`job-${index}`} job={job} userType={userType} showApplicants={viewMyJobs} />
      ))}

      {jobs.length === 0 && <h2 className="w-[100%] text-center text-themeBlue my-20">No jobs found!! Update your filters</h2>}
      <Pagination pageSize={PAGE_SIZE} totalItemCount={totalItemCount} gotoPage={(page) => setPage(page)} />
    </div>
  );
});

export default FilteredJobs;

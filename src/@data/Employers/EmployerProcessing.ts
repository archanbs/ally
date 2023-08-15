import { getJobIds } from "../Jobs/JobDetails";
import { employers } from "./Employer";


export function associateJobsToEmployers() {
  const jobIds = getJobIds();

  for (let i = 0; i < 10; i++) {
    employers[i].jobs = jobIds.slice(i * 50, (i + 1) * 50 - 1);
  }
}

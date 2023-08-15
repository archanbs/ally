import { USER_EMAIL_KEY } from "../../App.constants";
import { UserType } from "../../pages/LoginPage/LoginPage";
import { IJobDetails, readJobs } from "../Jobs/JobDetails";
import { fetchUserType } from "../utils/fetchUserType";
import { getEmployersData } from "./Employer";

export function fetchJobsForEmployer(): IJobDetails[] {
  if (fetchUserType() === UserType.Freelancer) {
    return [];
  }
  const employerEmail = localStorage.getItem(USER_EMAIL_KEY);
  const employers = [...getEmployersData()];
  const currentEmployer = employers.find((emp) => emp.email === employerEmail);
  console.log("currentEmployer", currentEmployer, currentEmployer.jobs);

  if (currentEmployer && currentEmployer.jobs) {
    const jobIds = [...currentEmployer.jobs];
    console.log(jobIds);

    if (jobIds && jobIds.length > 0) {
      const allJobs = readJobs();

      return allJobs.filter((job) => {
        // console.log(job.uid, jobIds.includes(job.uid));
        return jobIds.includes(job.uid);
      });
    }
  }
  console.log("returning 0 jobs!");
  return [];
}

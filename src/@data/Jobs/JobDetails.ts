import { JobType } from "../../pages/PostJob/@data/store";

export interface IJobDetails {
  uid: string;
  title: string;
  createdOn: Date;
  type: number;
  description: string;
  tierText: "Intermediate" | "Expert" | "Entry level" | string;
  attrs: ISkillSet[];
  amount: Amount;
  hourlyBudget?: IHourlyBudget;
}

export interface Amount {
  currencyCode: string;
  amount: number;
}

export interface IHourlyBudget {
  type?: string;
  min?: number;
  max?: number;
}

export interface ISkillSet {
  uid: number;
  prettyName: string;
}

export const readJobs = () => {
  const allJobs = require("./allJobs.json");
  return allJobs;
};

export const getJobIds = (): number[] => {
  const allJobs = require("./allJobs.json");
  return allJobs.map((job) => job.uid);
};

export const getJobsDataPaginated = (offset = 0, count = 10): IJobDetails[] => {
  const allJobs = require("./allJobs.json") as IJobDetails[];

  return allJobs.slice(offset, offset + count);
};

export const getFilteredJobData = (
  selectedSkills: string[],
  jobType?: JobType,
  minSalary?: number,
  maxSalary?: number,
  myJobs?: IJobDetails[]
): IJobDetails[] => {
  console.log("applying filters", selectedSkills[0], jobType, minSalary, maxSalary);
  let allJobs = myJobs || readJobs();

  if (selectedSkills.length > 0) {
    selectedSkills.forEach((skill) => {
      allJobs = allJobs.filter((job) => job.attrs.map((attr) => attr.prettyName).includes(skill));
    });
  }

  if (jobType) {
    const type = jobType === JobType.Hourly ? 2 : 1;
    allJobs = allJobs.filter((job) => job.type === type);
  }

  // if the expected and job budget overlaps then return
  // jobtype filter not present or it's hourly filter
  if ((minSalary || maxSalary) && (!jobType || jobType === JobType.Hourly)) {
    console.log("Applying min max salary filter ", minSalary, maxSalary);
    allJobs = allJobs.filter((job) => (minSalary && job.hourlyBudget?.max >= minSalary) || (maxSalary && job.hourlyBudget?.min <= maxSalary));
  } else {
    // If budget is within range
    // jobtype filter not present or it's fixed jobtype
    if (minSalary || maxSalary) {
      allJobs = allJobs.filter(
        (job) => (job.amount && minSalary && job.amount?.amount >= minSalary) || (maxSalary && job.amount?.amount <= maxSalary)
      );
    }
  }

  return allJobs;
};

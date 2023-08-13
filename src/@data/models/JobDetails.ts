import { singleJobString } from "./singleJob";

export interface IJobDetails {
  uid: string;
  title: string;
  createdOn: Date;
  type: number;
  description: string;
  tierText: "Intermediate" | "Expert" | "Entry level" | string;
  attrs: ISkillSet[];
}

export interface ISkillSet {
  uid: 1031626790123585536;
  prettyName: "Russian to English Translation";
}

export const getJobData = () => {
  const jobData = JSON.parse(singleJobString) as IJobDetails;
  return jobData;
};

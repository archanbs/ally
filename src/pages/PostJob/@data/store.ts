import { createStore } from "satcheljs";

export interface ICompanyInfo {
  companyName?: string;
  city?: string;
  country?: string;
  phoneNumber?: string;
  mobileNumber?: string;
}

export enum JobType {
  Fixed,
  Hourly,
}

export enum ExperienceLevel {
  Expert,
  Intermediate,
  Beginner,
}

export interface IRelevantDetails {
  jobType?: JobType;
  duration?: Number; //hours
  experienceLevel?: ExperienceLevel;
  location?: string;
  minPrice?: Number;
  maxPrice?: Number;
}

export interface IPostJobState {
  title: string;
  description: string;
  requirements: string;
  skills: string[];
  relevantDetails: IRelevantDetails;
  companyInfo: ICompanyInfo;
}

export const getPostJobStore = createStore<IPostJobState>("PostJobState", {
  title: "",
  description: "",
  requirements: "",
  skills: [],
  relevantDetails: {
    jobType: JobType.Hourly,
    location: "Remote",
  },
  companyInfo: {},
});

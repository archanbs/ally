import { mutatorAction } from "satcheljs";
import { ExperienceLevel, JobType, getPostJobStore } from "./store";
import { IChoiceOption } from "../../../components";

export const setTitle = mutatorAction("setTitle", (title: string) => {
  getPostJobStore().title = title;
});

export const setDescription = mutatorAction("setDescription", (msg: string) => {
  getPostJobStore().description = msg;
});

export const setRequirements = mutatorAction("setRequirements", (msg: string) => {
  getPostJobStore().requirements = msg;
});

export const setJobType = mutatorAction("setJobType", (choice: IChoiceOption) => {
  console.log(choice.key);
  getPostJobStore().relevantDetails.jobType = choice.key === "hourly" ? JobType.Hourly : JobType.Fixed;
});

export const setDuration = mutatorAction("setDuration", (duration: Number) => {
  getPostJobStore().relevantDetails.duration = duration;
});

export const setMinPrice = mutatorAction("setMinPrice", (minPrice: Number) => {
  getPostJobStore().relevantDetails.minPrice = minPrice;
});

export const setMaxPrice = mutatorAction("setMaxPrice", (maxPrice: Number) => {
  getPostJobStore().relevantDetails.maxPrice = maxPrice;
});

export const setExperienceLevel = mutatorAction("setExperienceLevel", (choice: IChoiceOption) => {
  console.log("setExperienceLevel", choice.key);
  getPostJobStore().relevantDetails.experienceLevel =
    choice.key === "beginner" ? ExperienceLevel.Beginner : choice.key === "intermediate" ? ExperienceLevel.Intermediate : ExperienceLevel.Expert;
});

export const setLocation = mutatorAction("setLocation", (location: string) => {
  getPostJobStore().relevantDetails.location = location;
});

export const setCompanyHQ = mutatorAction("setCompanyHQ", (city: string) => {
  getPostJobStore().companyInfo.city = city;
});

export const setCompanyName = mutatorAction("setCompanyName", (companyName: string) => {
  getPostJobStore().companyInfo.companyName = companyName;
});

export const setCountry = mutatorAction("setCountry", (country: string) => {
  getPostJobStore().companyInfo.country = country;
});

export const setMobileNumber = mutatorAction("setMobileNumber", (mobileNumber: string) => {
  getPostJobStore().companyInfo.mobileNumber = mobileNumber;
});

export const setPhoneNumber = mutatorAction("setPhoneNumber", (phoneNumber: string) => {
  getPostJobStore().companyInfo.phoneNumber = phoneNumber;
});

export const addSkill = mutatorAction("addSkill", (skill: string) => {
  const { skills } = getPostJobStore();

  if (skills.find((s) => s === skill)) {
    return;
  }
  getPostJobStore().skills.push(skill);
});

export const removeSkill = mutatorAction("removeSkill", (skill: string) => {
  const { skills } = getPostJobStore();
  console.log("removeSkill called", skill);

  getPostJobStore().skills = skills.filter((s) => s !== skill);
});

export const clearAllSkills = mutatorAction("clearAllSkills", () => {
  console.log("clearAllSkills called");
  getPostJobStore().skills = [];
});

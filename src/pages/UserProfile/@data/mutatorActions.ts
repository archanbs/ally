import { mutatorAction } from "satcheljs";
import { getUserProfileStore } from "./store";
import { ExperienceLevel } from "../../PostJob/@data/store";
import { IChoiceOption } from "../../../components";

export const setTitle = mutatorAction("setTitle", (title: string) => {
  getUserProfileStore().title = title;
});

export const setDescription = mutatorAction("setDescription", (msg: string) => {
  getUserProfileStore().description = msg;
});

export const setExperienceLevel = mutatorAction("setExperienceLevel", (choice: IChoiceOption) => {
  console.log("setExperienceLevel", choice.key);
  getUserProfileStore().experienceLevel =
    choice.key === "beginner" ? ExperienceLevel.Beginner : choice.key === "intermediate" ? ExperienceLevel.Intermediate : ExperienceLevel.Expert;
});

export const setHourlyRate = mutatorAction("setHourlyRate", (hourlyRate: Number) => {
  getUserProfileStore().hourlyRate = hourlyRate;
});

export const setGitHubProfile = mutatorAction("setGitHubProfile", (msg: string) => {
  getUserProfileStore().githubProfile = msg;
});

export const addSkill = mutatorAction("addSkill", (skill: string) => {
  const { skills } = getUserProfileStore();

  if (skills.find((s) => s === skill)) {
    return;
  }
  getUserProfileStore().skills.push(skill);
});

export const removeSkill = mutatorAction("removeSkill", (skill: string) => {
  const { skills } = getUserProfileStore();
  console.log("removeSkill called", skill);

  getUserProfileStore().skills = skills.filter((s) => s !== skill);
});

export const clearAllSkills = mutatorAction("clearAllSkills", () => {
  console.log("clearAllSkills called");
  getUserProfileStore().skills = [];
});

export const setAddressLine1 = mutatorAction("setAddressLine1", (msg: string) => {
  getUserProfileStore().contactInfo.addressline1 = msg;
});

export const setAddressLine2 = mutatorAction("setAddressLine2", (msg: string) => {
  getUserProfileStore().contactInfo.addressline2 = msg;
});

export const setCity = mutatorAction("setCity", (msg: string) => {
  getUserProfileStore().contactInfo.city = msg;
});

export const setStateOrProvince = mutatorAction("setStateOrProvince", (msg: string) => {
  getUserProfileStore().contactInfo.stateOrProvince = msg;
});

export const setCountry = mutatorAction("setCountry", (msg: string) => {
  getUserProfileStore().contactInfo.country = msg;
});

export const setZipCode = mutatorAction("setZipCode", (msg: string) => {
  getUserProfileStore().contactInfo.zipCode = msg;
});

export const setMobileNumber = mutatorAction("setMobileNumber", (mobileNumber: string) => {
  getUserProfileStore().contactInfo.mobileNumber = mobileNumber;
});

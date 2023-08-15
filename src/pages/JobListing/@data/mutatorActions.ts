import { mutatorAction } from "satcheljs";
import { JobType } from "../../PostJob/@data/store";
import { getFiltersStore } from "./store";

export const setJobType = mutatorAction("setJobType", (jobType: JobType) => {
  console.log("updating jobtype", jobType);
  if (jobType === getFiltersStore().jobType) {
    getFiltersStore().jobType = undefined;
  } else {
    getFiltersStore().jobType = jobType;
  }
});

export const addSelectedSkill = mutatorAction("addSelectedSkill", (skill: string) => {
  console.log("addSelectedSkill", skill);
  getFiltersStore().selectedSkills.push(skill);
});

export const removeSelectedSkill = mutatorAction("removeSelectedSkill", (skill: string) => {
  console.log("remove selec skill", skill);
  const { selectedSkills } = getFiltersStore();
  getFiltersStore().selectedSkills = selectedSkills.filter((s) => s !== skill);
});

export const clearAllFilters = mutatorAction("clearAllFilters", () => {
  console.log("clear all filters called");
  const store = getFiltersStore();
  store.jobType = undefined;
  store.minSalary = undefined;
  store.maxSalary = undefined;
  store.selectedSkills = [];
});

export const setMinSalary = mutatorAction("setMinSalary", (minSalary: number) => {
  getFiltersStore().minSalary = minSalary;
});

export const setMaxSalary = mutatorAction("setMaxSalary", (maxSalary: number) => {
  getFiltersStore().maxSalary = maxSalary;
});

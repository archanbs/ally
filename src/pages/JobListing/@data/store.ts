import { createStore } from "satcheljs";
import { JobType } from "../../PostJob/@data/store";

export interface IAppliedFilters {
  selectedSkills: string[];
  jobType?: JobType;
  minSalary?: number;
  maxSalary?: number;
}

export const getFiltersStore = createStore<IAppliedFilters>("AppliedFilters", {
  selectedSkills: [],
});

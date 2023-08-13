import { createStore } from "satcheljs";
import { ExperienceLevel } from "../../PostJob/@data/store";

export interface UserContactInfo {
  addressline1?: string;
  addressline2?: string;
  city?: string;
  stateOrProvince?: string;
  country?: string;
  zipCode?: string;
  mobileNumber?: string; // todo: separate out the extension and mobile number
}

export interface IUserProfileState {
  title: string;
  description: string;
  hourlyRate: Number;
  experienceLevel: ExperienceLevel;
  skills: string[];
  services?: string[];
  contactInfo?: UserContactInfo;
}

export const getUserProfileStore = createStore<IUserProfileState>("UserProfileState", {
  title: "",
  description: "",
  hourlyRate: 5,
  experienceLevel: ExperienceLevel.Beginner,
  skills: [],
  contactInfo: {},
});

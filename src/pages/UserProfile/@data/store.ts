import { createStore } from "satcheljs";
import { ExperienceLevel } from "../../PostJob/@data/store";
import * as yup from "yup";
import { IStringDictionary } from "../../../@data/utils/formValidationUtils";
import { USER_EMAIL_KEY } from "../../../App.constants";

export interface UserContactInfo {
  addressline1?: string;
  addressline2?: string;
  city?: string;
  stateOrProvince?: string;
  country?: string;
  zipCode?: string;
  mobileNumber?: string; // todo: separate out the extension and mobile number
}

export interface GitHubRepo {
  html_url: string;
  name: string;
  language: string;
  watchers_count: number;
  visibility: string;
}

export interface IUserProfile {
  id?: number;
  name: string;
  title: string;
  description: string;
  hourlyRate: Number;
  experienceLevel: ExperienceLevel;
  skills: string[];
  githubProfile: string;
  ghRepos: GitHubRepo[];
  contactInfo?: UserContactInfo;
  email: string;
  password: string;
}

export interface IUserProfileState extends IUserProfile {
  errors?: IStringDictionary;
}

export const getUserProfileStore = createStore<IUserProfileState>("UserProfileState", {
  name: "",
  title: "",
  description: "",
  hourlyRate: 5,
  experienceLevel: ExperienceLevel.Beginner,
  skills: [],
  githubProfile: "",
  ghRepos: [],
  contactInfo: {},
  email: localStorage.getItem(USER_EMAIL_KEY),
  password: localStorage.getItem("password"),
});

export const userProfileSchema = yup.object({
  name: yup.string().required(),
  title: yup.string().required("Please enter brief title"),
  description: yup.string().min(200).required("Your bio should be atleast 200 characters"),
  skills: yup.array().required(),
  githubProfile: yup.string().required(),
});

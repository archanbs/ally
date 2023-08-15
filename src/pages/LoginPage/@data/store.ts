import { createStore } from "satcheljs";
import { IStringDictionary } from "../../../@data/utils/formValidationUtils";

export interface ILoginState {
  email: string;
  password: string;
  passwordDoesNotMatch?: boolean;
  loginErrors?: IStringDictionary;
}

export const getLoginStore = createStore<ILoginState>("LoginStore", {
  email: "",
  password: "",
  passwordDoesNotMatch: false,
});

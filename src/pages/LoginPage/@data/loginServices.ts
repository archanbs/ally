import { USER_TYPE_KEY, USER_EMAIL_KEY } from "../../../App.constants";
import { UserType } from "../LoginPage";

export function loginUser(email: string, password: string, userType: UserType) {
  // if user details are valid
  // TODO: validate login details

  localStorage.setItem(USER_TYPE_KEY, userType.toString());
  localStorage.setItem(USER_EMAIL_KEY, email);
  // TODO: fix redirection email
  window.location.replace("./");
}

export function logoutUser() {
  localStorage.removeItem(USER_EMAIL_KEY);
}

import { USER_TYPE_KEY } from "../../App.constants";
import { UserType } from "../../pages/LoginPage/LoginPage";

export function fetchUserType() {
  const userType = localStorage.getItem(USER_TYPE_KEY);
  return userType === "1" ? UserType.Freelancer : UserType.Employer;
}

import { action, orchestrator } from "satcheljs";
import { handleLoginFormErrors } from "./handleLoginFormErrors";
import { loginUser } from "./services/loginServices";
import { UserType } from "../LoginPage";
import { getLoginStore } from "./store";
import { loginEmployer } from "./services/employerLoginServices";

export const onLoginFormSubmitted = action("loginFormSubmitted", (userType: UserType) => ({ userType }));

orchestrator(onLoginFormSubmitted, async ({ userType }) => {
  console.log("login form submitted");
  await handleLoginFormErrors();

  const { email, password, loginErrors } = getLoginStore();
  console.log(loginErrors);
  if (!loginErrors && email !== "" && password !== "") {
    if (userType === UserType.Freelancer) {
      loginUser(email, password, userType);
    } else {
      loginEmployer(email, password, userType);
    }
  }
});

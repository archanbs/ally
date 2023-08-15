import { getEmployersData } from "../../../../@data/Employers/Employer";
import { USER_EMAIL_KEY, USER_TYPE_KEY } from "../../../../App.constants";
import { UserType } from "../../LoginPage";
import { setPasswordDoesNotMatch } from "../mutatorActions";

export function loginEmployer(email: string, password: string, userType: UserType) {
  const employerData = [...getEmployersData()];
  const employer = employerData.find((emp) => emp.email === email);

  if (employer && employer.password === password) {
    console.log("valid login");
    localStorage.setItem(USER_TYPE_KEY, userType.toString());
    localStorage.setItem(USER_EMAIL_KEY, email);
    window.location.replace("./");
  } else if (employer && employer.password !== password) {
    setPasswordDoesNotMatch(true);
    return;
  } else {
    const newEmployer = { email: email, password: password, id: employerData.length + 1 };
    employerData.push(newEmployer);
    localStorage.setItem("Employers", JSON.stringify(employerData));
    window.location.replace("./");
  }
}

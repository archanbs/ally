import { getUsers } from "../../../../@data/Users/getUsers";
import { USER_TYPE_KEY, USER_EMAIL_KEY } from "../../../../App.constants";
import { UserType } from "../../LoginPage";
import { setPasswordDoesNotMatch } from "../mutatorActions";

const VALID_LOGIN = "valid";
const INVALID_PASSWORD = "invalid password";
const USER_DOES_NOT_EXIST = "User does not exist";

function validateLoginDetails(email: string, password: string) {
  console.log("validateLoginDetails");
  const users = getUsers();
  const userFound = users.find((user) => user.email === email);

  if (!userFound) {
    return USER_DOES_NOT_EXIST;
  }

  if (userFound.password === password) {
    return VALID_LOGIN;
  } else {
    console.log("password doesnt match");
    return INVALID_PASSWORD;
  }
}

export function loginUser(email: string, password: string, userType: UserType) {
  const loginResult = validateLoginDetails(email, password);

  if (loginResult === VALID_LOGIN) {
    console.log("valid login");
    localStorage.setItem(USER_TYPE_KEY, userType.toString());
    localStorage.setItem(USER_EMAIL_KEY, email);
    window.location.replace("./");
  } else if (loginResult === INVALID_PASSWORD) {
    console.log("setPasswordDoesNotMatch");

    setPasswordDoesNotMatch(true);
  } else if (loginResult === USER_DOES_NOT_EXIST) {
    localStorage.setItem(USER_TYPE_KEY, userType.toString());
    localStorage.setItem(USER_EMAIL_KEY, email);
    localStorage.setItem("password", password);

    window.location.replace("./create-profile");
  }
}

export function logoutUser() {
  localStorage.removeItem(USER_EMAIL_KEY);
}

export function updatePassword(userEmail: any, newPassword: string): void {
  const locaUsers = localStorage.getItem("localUsers");
  let localUsersArray = [];
  if (locaUsers && locaUsers.length > 100) {
    localUsersArray = JSON.parse(locaUsers);

    const existingUser = localUsersArray.find((u) => u.email === userEmail);
    if (existingUser) {
      existingUser.password = newPassword;
      localUsersArray = localUsersArray.filter((u) => u.email !== userEmail);
      localUsersArray.push(existingUser);
      localStorage.setItem("localUsers", JSON.stringify(localUsersArray));
    }
  }
  window.location.replace("./login");
}

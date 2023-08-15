import { action, orchestrator } from "satcheljs";
import { IUserProfile, getUserProfileStore } from "./store";

export const formSubmitted = action("formSubmitted");

orchestrator(formSubmitted, () => {
  console.log("Form submitted");
  const store = getUserProfileStore();
  const user: IUserProfile = { ...store };

  const locaUsers = localStorage.getItem("localUsers");
  console.log(locaUsers);
  let localUsersArray = [];
  if (locaUsers && locaUsers.length > 100) {
    localUsersArray = JSON.parse(locaUsers);

    const existingUser = localUsersArray.find((u) => u.email === user.email);
    if (existingUser) {
      user.id = existingUser.id;
      user.password = existingUser.password;
      localUsersArray = localUsersArray.filter((u) => u.email !== user.email);
    } else {
      user.id = new Date().valueOf();
    }
  }
  localUsersArray.push(user);
  localStorage.setItem("localUsers", JSON.stringify(localUsersArray));
  localStorage.removeItem("password");
});

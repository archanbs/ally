import { IUserProfile } from "../../pages/UserProfile/@data/store";

export const getUsers = (): IUserProfile[] => {
  let users = require("./allUsers.json") as IUserProfile[];

  const locaUsers = localStorage.getItem("localUsers");
  let localUsersArray = [];
  if (locaUsers && locaUsers.length > 100) {
    localUsersArray = JSON.parse(locaUsers);
  }

  return users.concat(localUsersArray);
};

import { mutatorAction } from "satcheljs";
import { getLoginStore } from "./store";

export const setEmail = mutatorAction("setEmail", (email: string) => {
  getLoginStore().email = email;
});

export const setPassword = mutatorAction("setPassword", (password: string) => {
  getLoginStore().password = password;
});

export const setPasswordDoesNotMatch = mutatorAction("setPasswordDoesNotMatch", (passwordDoesNotMatch: boolean) => {
  getLoginStore().passwordDoesNotMatch = passwordDoesNotMatch;
});

import { action, mutatorAction, orchestrator } from "satcheljs";
import { loginFormSchema } from "./loginErrorModel";
import { IStringDictionary } from "../../../@data/utils/formValidationUtils";
import { getLoginStore } from "./store";

export const handleLoginFormErrors = action("handleLoginFormErrors");

export const setLoginFormErrors = mutatorAction("setLoginFormErrors", (errors?: IStringDictionary) => {
  getLoginStore().loginErrors = errors;
});

orchestrator(handleLoginFormErrors, async () => {
  console.log("handleLoginFormErrors");
  const { email, password } = getLoginStore();

  try {
    await loginFormSchema.validate({
      email: email,
      password: password,
    });
    setLoginFormErrors();
  } catch (e) {
    console.log(JSON.stringify(e));

    const errors = {
      [e.path]: e.errors[0],
    };
    setLoginFormErrors(errors);
  }
});

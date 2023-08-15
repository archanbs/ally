import { action, mutatorAction, orchestrator } from "satcheljs";
import { getUserProfileStore } from "./store";
import { IStringDictionary } from "../../../@data/utils/formValidationUtils";

export const handleFormErrors = action("handleFormErrors");
export const setErrors = mutatorAction("setErrors", (errors?: IStringDictionary) => {
  getUserProfileStore().errors = errors;
});

orchestrator(handleFormErrors, async () => {});

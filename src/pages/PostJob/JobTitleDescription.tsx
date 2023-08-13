import React from "react";
import { TextArea, TextField } from "../../components";
import { getPostJobStore } from "./@data/store";
import { setDescription, setRequirements, setTitle } from "./@data/mutatorActions";
import { observer } from "mobx-react";

export const JobTitleDescription = observer(() => {
  const { title, description, requirements } = getPostJobStore();
  console.log(title, description, requirements);

  return (
    <div>
      <TextField label={"Job title"} id="title" placeholder={"Enter job title"} value={title} required onChange={setTitle} />

      <TextArea
        label="Job description"
        id="description"
        placeholder={"Enter job description"}
        textValue={description}
        description={"Enter upto 16,000 characters"}
        required
        onChange={setDescription}
      />

      <TextArea
        label="Job requirements"
        id="requirements"
        placeholder={"Enter job requirements"}
        textValue={requirements}
        description={"Enter each requirement in a new line"}
        required
        onChange={setRequirements}
      />
    </div>
  );
});

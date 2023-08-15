import React from "react";
import { ChoiceGroup, TextArea, TextField } from "../../components";
import { setDescription, setExperienceLevel, setHourlyRate, setName, setTitle } from "./@data/mutatorActions";
import { observer } from "mobx-react";
import { getUserProfileStore } from "./@data/store";
import { ExperienceLevel } from "../PostJob/@data/store";

export const TitleAndBio = observer(() => {
  const { name, title, description, experienceLevel, hourlyRate } = getUserProfileStore();

  return (
    <>
      <TextField label={"Name"} id="name" placeholder={""} value={name} required onChange={setName} width={300} />

      <TextField
        label={"Title"}
        id="title"
        placeholder={""}
        value={title}
        required
        onChange={setTitle}
        description="Enter title related to your professional services"
        width={500}
      />

      <TextArea
        label="Enter your bio"
        id="bio"
        placeholder={"Enter a short bio "}
        textValue={description}
        description={"Enter atleast 200 characters"}
        required
        onChange={setDescription}
      />

      <ChoiceGroup
        label="Select your experience level"
        options={[
          { key: "beginner", value: "Beginner" },
          { key: "intermediate", value: "Intermediate" },
          { key: "expert", value: "Expert" },
        ]}
        selectedKey={ExperienceLevel[experienceLevel]?.toLowerCase()}
        onChange={setExperienceLevel}
      />

      <TextField
        label="Hourly rate"
        id="hourly-rate"
        type="number"
        suffix="$"
        width={150}
        value={hourlyRate?.toString()}
        onChange={(val) => setHourlyRate(Number(val))}
        description="Set your hourly rate that you expect client to pay for your services"
        min={5}
        required
      />
    </>
  );
});

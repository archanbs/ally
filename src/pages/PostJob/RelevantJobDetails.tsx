import { observer } from "mobx-react";
import { ChoiceGroup } from "../../components";

import { ExperienceLevel, JobType, getPostJobStore } from "./@data/store";
import { setDuration, setExperienceLevel, setJobType, setLocation, setMaxPrice, setMinPrice } from "./@data/mutatorActions";
import { TextField } from "../../components/TextField/TextField";
import React from "react";

export const RelevantJobDetails = observer(() => {
  const { jobType, duration, experienceLevel, minPrice, maxPrice, location } = getPostJobStore().relevantDetails;
  console.log("Re-rendering after state change", jobType, experienceLevel);

  return (
    <>
      <ChoiceGroup
        label="Job type"
        options={[
          { key: "hourly", value: "Hourly" },
          { key: "fixed", value: "Fixed" },
        ]}
        selectedKey={jobType === JobType.Hourly ? "hourly" : "fixed"}
        onChange={setJobType}
      />

      <TextField
        label="Duration"
        id="duration"
        type="number"
        suffix="Hours"
        width={100}
        description="Provide approximate duration the job might require to finish"
        value={duration?.toString()}
        onChange={(val) => setDuration(Number(val))}
        min={0}
      />

      <div className="flex gap-1 mt-4">
        <TextField
          label="Min price"
          id="min-price"
          type="number"
          suffix="$ -"
          width={100}
          value={minPrice?.toString()}
          onChange={(val) => setMinPrice(Number(val))}
          min={0}
        />
        <TextField
          label="Max price"
          id="max-price"
          type="number"
          suffix="$"
          width={100}
          value={maxPrice?.toString()}
          onChange={(val) => setMaxPrice(Number(val))}
        />
      </div>
      {/* <div className="text-[12px] text-[#4f4f4f] mt-2 mb-10">
        {"Disclaimer: Depending on the job type, price is price per hour for hourly, or the total price for the project for fixed job type"}
      </div> */}

      <ChoiceGroup
        label="Experience level"
        options={[
          { key: "beginner", value: "Beginner" },
          { key: "intermediate", value: "Intermediate" },
          { key: "expert", value: "Expert" },
        ]}
        selectedKey={ExperienceLevel[experienceLevel]?.toLowerCase()}
        onChange={setExperienceLevel}
      />

      <TextField label="Location" id="location" type="text" value={location} placeholder="Enter job location" onChange={setLocation} />
    </>
  );
});

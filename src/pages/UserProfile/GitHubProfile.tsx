import React from "react";
import { TextField } from "../../components";

export const GitHubProfile = () => {
  return (
    <div>
      {/* <label className="font-semibold">Enter your GitHub profile</label> */}
      <TextField
        value=""
        placeholder="https://github.com/archanbs"
        label={"GitHub profile"}
        id={"github-profile"}
        onChange={(val) => {
          if (val.indexOf("github.com") !== -1) {
            const parts = val.split("/");
          }
        }}
      />
    </div>
  );
};

import React from "react";
import { IUserProfile } from "./@data/store";
import { ExperienceLevel } from "../PostJob/@data/store";
import { CustomList } from "../../components";
import { GitHubRepoInfo } from "./GitHubProfile";

export const ReviewProfile = (userProfile: IUserProfile) => {
  const { title, description, experienceLevel, hourlyRate, skills, githubProfile, ghRepos } = userProfile;

  return (
    <div>
      <div className="pb-4">
        <span className="font-semibold text-themeBlue">Title: </span>
        <span className="pb-4 px-2">{title}</span>
      </div>

      <div className="font-semibold text-themeBlue">Description</div>
      <div className="pb-4">{description}</div>

      <div className="pb-4">
        <span className="font-semibold text-themeBlue">Experience:</span>
        <span className="px-4">{ExperienceLevel[experienceLevel]}</span>
      </div>

      <div className="pb-4">
        <span className="font-semibold text-themeBlue">Hourly rate:</span>
        <span className="px-4">{`${hourlyRate?.toString()} $`}</span>
      </div>

      <div className="pb-4">
        <span className="font-semibold text-themeBlue">Skills:</span>
        <CustomList label={""} items={skills || []} showClearAll={false} />
      </div>

      <span className="font-semibold text-themeBlue">GitHub profile:</span>
      <span className="px-4">
        <i>{githubProfile}</i>
      </span>

      <div className="flex flex-wrap gap-2">
        {ghRepos?.map((repo) => (
          <GitHubRepoInfo key={repo.name} {...repo} />
        ))}
      </div>
    </div>
  );
};

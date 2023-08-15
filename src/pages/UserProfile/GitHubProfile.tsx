import React from "react";
import { Button, TextField } from "../../components";
import { fetchGitHubRepos } from "./@data/fetchGitHubRepos";
import { GitHubRepo, getUserProfileStore } from "./@data/store";
import { setGitHubProfile } from "./@data/mutatorActions";
import { observer } from "mobx-react";
import { AiOutlineEye } from "react-icons/ai";

export const GitHubProfile = observer(() => {
  const { ghRepos, githubProfile } = getUserProfileStore();
  const [profile, setProfile] = React.useState(githubProfile || "");

  return (
    <div>
      <div className="flex">
        <TextField
          value={profile}
          placeholder="https://github.com/archanbs"
          label={"GitHub profile"}
          id={"github-profile"}
          onChange={(val) => {
            setProfile(val);
            setGitHubProfile(val);
          }}
          width={400}
        />
        <Button
          className="text-[white] bg-themeBlue p-[2px] rounded-md hover:bg-[#1560bd] text-[12px] h-10 self-center"
          text={"Fetch github repositories"}
          onClick={() => {
            if (profile.indexOf("github.com") !== -1) {
              const parts = profile.split("github.com/");
              const githubUserName = parts[1];
              fetchGitHubRepos(githubUserName);
            }
          }}
        />
      </div>
      <div className="my-4 flex flex-wrap gap-2">
        {ghRepos.map((repo) => (
          <GitHubRepoInfo key={repo.name} {...repo} />
        ))}
      </div>
    </div>
  );
});

export const GitHubRepoInfo = ({ name, html_url, watchers_count, language, visibility }: GitHubRepo) => {
  return (
    <div className="m-1 p-4 rounded border border-gray-400">
      <a className="text-themeBlue font-semibold underline" href={html_url}>
        {name}
      </a>
      <div className="flex gap-4 text-[12px] mt-2 justify-between">
        <span>{language}</span>
        <span className="flex gap-1 px-2">
          <AiOutlineEye className="self-center" />
          {watchers_count}
        </span>
        <span>{visibility}</span>
      </div>
    </div>
  );
};

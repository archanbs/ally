import { action, orchestrator } from "satcheljs";
import { GitHubRepo, getUserProfileStore } from "./store";

export const fetchGitHubRepos = action("fetchGitHubRepos", (gitHubUserName: string) => ({ gitHubUserName }));

orchestrator(fetchGitHubRepos, async ({ gitHubUserName }) => {
  try {
    const response = await fetch(`https://api.github.com/users/${gitHubUserName}/repos`);
    const repos = await response.json();

    const githubRepos = [];

    repos.forEach((repo) => {
      const githubRepo: GitHubRepo = {
        language: repo.language,
        html_url: repo.html_url,
        name: repo.name,
        watchers_count: repo.watchers_count,
        visibility: repo.visibility,
      };
      console.log(githubRepo);
      githubRepos.push(githubRepo);
    });
    getUserProfileStore().ghRepos = githubRepos;
  } catch {
    console.log("Failed to fetch github repos");
    // TODO: set error on username field
  }
});

import { getUsers } from "../Users/getUsers";
import { getJobIds } from "./JobDetails";

function get_random() {
  const list = [1, 3, 4];
  return list[Math.floor(Math.random() * list.length)];
}

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

export const JobToApplicantsMapping = {};

export const generateJobToApplicantsMapping = () => {
  const jobIds = getJobIds();
  const users = getUsers();

  jobIds.forEach((id) => {
    JobToApplicantsMapping[id] = getMultipleRandom(users, get_random()).map((user) => user.id);
  });
//   console.log(JobToApplicantsMapping);
};

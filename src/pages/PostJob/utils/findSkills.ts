import { skills } from "./all_skills";

export function findSkills(searchVal: string) {
  console.log("findSkills - ", searchVal);
  // const filteredSkills = skills.filter((skillName) => skillName.toLowerCase().indexOf(searchVal) === 0);

  const n = skills.length;
  const filteredSkills = [];
  for (let i = 0; i < n; i++) {
    if (skills[i].toLowerCase().indexOf(searchVal) === 0) {
      filteredSkills.push(skills[i]);
    }
    if (filteredSkills.length >= 10) {
      break;
    }
  }
  console.log(filteredSkills);
  return filteredSkills;
}

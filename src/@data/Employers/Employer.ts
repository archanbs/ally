import { associateJobsToEmployers } from "./EmployerProcessing";

export function setupEmployerData() {
  associateJobsToEmployers();
  localStorage.setItem("Employers", JSON.stringify(employers));
}

export function getEmployersData() {
  const employersData = localStorage.getItem("Employers");
  return JSON.parse(employersData);
}

export const employers = [
  {
    email: "archs@outlook.com",
    password: "password",
    country: "India",
    id: 3,
    city: "Bangalore",
    company: "Cum Sociis Natoque Corporation",
    jobs: [],
  },
  {
    email: "a.arcu@icloud.edu",
    password: "password",
    country: "Vietnam",
    id: 4,
    city: "Juliaca",
    company: "Pellentesque Massa Inc.",
    jobs: [],
  },
  {
    email: "nisl.elementum@icloud.edu",
    password: "password",
    country: "Germany",
    id: 1,
    city: "Vienna",
    company: "Et Ipsum Associates",
    jobs: [],
  },
  {
    email: "mauris@aol.edu",
    password: "password",
    country: "Indonesia",
    id: 10,
    city: "Odda",
    company: "Nunc Associates",
    jobs: [],
  },
  {
    email: "adipiscing@outlook.com",
    password: "password",
    country: "Costa Rica",
    id: 8,
    city: "Iksan",
    company: "Volutpat Nunc Incorporated",
    jobs: [],
  },
  {
    email: "ultricies@google.couk",
    password: "password",
    country: "Indonesia",
    id: 2,
    city: "Bünyan",
    company: "Sed Nunc Limited",
    jobs: [],
  },
  {
    email: "interdum@protonmail.edu",
    password: "password",
    country: "Ukraine",
    id: 7,
    city: "Quirihue",
    company: "Neque LLC",
    jobs: [],
  },
  {
    email: "lobortis.quis@hotmail.edu",
    password: "password",
    country: "Costa Rica",
    id: 5,
    city: "Siquirres",
    company: "Elit Erat Vitae Ltd",
    jobs: [],
  },
  {
    email: "pede@aol.couk",
    password: "password",
    country: "Russian Federation",
    id: 6,
    city: "Falun",
    company: "Mauris Integer Sem Institute",
    jobs: [],
  },
  {
    email: "fringilla@protonmail.com",
    password: "password",
    country: "China",
    id: 9,
    city: "Avesta",
    company: "Tempor Augue Incorporated",
    jobs: [],
  },
];

import React from "react";
import { Footer } from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./pages/UserProfile/UserProfile";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { JobListing } from "./pages/JobListing/JobListing";
import { PostJob } from "./pages/PostJob/PostJob";
import { ViewMyJobs } from "./pages/JobListing/ViewMyJobs";
import { generateJobToApplicantsMapping } from "./@data/Jobs/jobsProcessing";
import { ViewApplicants } from "./pages/ViewApplicants/ViewApplicants";
// import { setupEmployerData } from "./@data/Employers/Employer";

function App() {
  React.useEffect(() => {
    // setupEmployerData();
    generateJobToApplicantsMapping();
  }, []);

  return (
    <BrowserRouter>
      <div className=" h-screen flex flex-col bg-white m-auto">
        <Header />

        <div role="main" className="w-11/12 flex-1 flex m-auto">
          <Routes>
            <Route path="/" element={<JobListing />} />
            <Route path="/create-profile" element={<UserProfile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/postJob" element={<PostJob />} />
            <Route path="/viewMyJobs" element={<ViewMyJobs />} />
            <Route path="/viewApplicants" element={<ViewApplicants />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

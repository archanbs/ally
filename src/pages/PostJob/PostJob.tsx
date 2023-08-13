import React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { observer } from "mobx-react";
import { JobTitleDescription } from "./JobTitleDescription";
import { Skills } from "./Skills";
import { RelevantJobDetails } from "./RelevantJobDetails";
import { ContactInfoAndSubmit } from "./ContactInfoAndSubmit";

enum Section {
  title,
  skills,
  relevantDetails,
  contactInfo
}

export const PostJob = observer(() => {
  const [section, setSection] = React.useState(Section.title);

  return (
    <div className="w-[100%]">
      <h2 className="font-semibold text-2xl text-center m-4">Post a job</h2>
      <hr />
      <div className="flex">
        <div className="w-[250px]">
          <SectionHeading
            id="titleSection"
            selected={section === Section.title}
            label={"Job title & description"}
            onClick={() => setSection(Section.title)}
          />
          <SectionHeading id="skills" selected={section === Section.skills} label={"Skills"} onClick={() => setSection(Section.skills)} />
          <SectionHeading
            id="relevantDetails"
            selected={section === Section.relevantDetails}
            label={"Relevant details"}
            onClick={() => setSection(Section.relevantDetails)}
          />
          <SectionHeading
            id="contactInfo"
            selected={section === Section.contactInfo}
            label={"Company & contact info"}
            onClick={() => setSection(Section.contactInfo)}
          />
        </div>

        <div className="pl-10 pt-10">
          {section === Section.title && <JobTitleDescription />}
          {section === Section.skills && <Skills />}
          {section === Section.relevantDetails && <RelevantJobDetails />}
          {section === Section.contactInfo && <ContactInfoAndSubmit />}
        </div>
      </div>
    </div>
  );
});

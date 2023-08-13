import { observer } from "mobx-react";
import * as React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { Skills } from "./Skills";
import { TitleAndBio } from "./TitleAndBio";
import { ContactInfoAndSubmit } from "./ContactInfoAndSubmit";
import { GitHubProfile } from "./GitHubProfile";

enum Section {
  title, // title, bio, experience level, hourly rate
  skills, // skills, services(optional)
  experience, // github projects
  // education, (optional)
  contactInfo,
}

export const UserProfile = observer(() => {
  const [section, setSection] = React.useState(Section.title);

  return (
    <div className="w-[100%]">
      <h2 className="font-semibold text-2xl text-center m-4">User profile</h2>
      <hr />
      <div className="flex">
        <div className="w-[250px]">
          <SectionHeading id="titleSection" selected={section === Section.title} label={"Title & bio"} onClick={() => setSection(Section.title)} />
          <SectionHeading id="skills" selected={section === Section.skills} label={"Skills"} onClick={() => setSection(Section.skills)} />
          <SectionHeading
            id="experience"
            selected={section === Section.experience}
            label={"Experience"}
            onClick={() => setSection(Section.experience)}
          />
          <SectionHeading
            id="contactInfo"
            selected={section === Section.contactInfo}
            label={"Contact info"}
            onClick={() => setSection(Section.contactInfo)}
          />
        </div>

        <div className="pl-10 pt-10">
          {section === Section.title && <TitleAndBio />}
          {section === Section.skills && <Skills />}
          {section === Section.experience && <GitHubProfile />}
          {section === Section.contactInfo && <ContactInfoAndSubmit />}
        </div>
      </div>
    </div>
  );
});

export default UserProfile;

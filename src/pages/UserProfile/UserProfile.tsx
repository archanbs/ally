import { observer } from "mobx-react";
import * as React from "react";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { Skills } from "./Skills";
import { TitleAndBio } from "./TitleAndBio";
import { GitHubProfile } from "./GitHubProfile";
import { Button } from "../../components";
import { ReviewProfile } from "./ReviewProfile";
import { handleFormErrors } from "./@data/handleFormErrors";
import "./@data/formSubmitted";
import { formSubmitted } from "./@data/formSubmitted";
import { getUserProfileStore } from "./@data/store";

enum Section {
  title, // title, bio, experience level, hourly rate
  skills, // skills, services(optional)
  experience, // github projectsw
  contactInfo,
  reviewProfile,
}

export const UserProfile = observer(() => {
  const [section, setSection] = React.useState(Section.title);

  return (
    <div className="w-[100%]">
      <h2 className="font-semibold text-2xl text-center m-4">User profile</h2>
      <hr />
      <div className="flex h-[85%]">
        <div className="w-[250px]">
          <SectionHeading id="titleSection" selected={section === Section.title} label={"Title & bio"} onClick={() => setSection(Section.title)} />
          <SectionHeading id="skills" selected={section === Section.skills} label={"Skills"} onClick={() => setSection(Section.skills)} />
          <SectionHeading
            id="experience"
            selected={section === Section.experience}
            label={"Experience"}
            onClick={() => setSection(Section.experience)}
          />
          {/* <SectionHeading
            id="contactInfo"
            selected={section === Section.contactInfo}
            label={"Contact info"}
            onClick={() => setSection(Section.contactInfo)}
          /> */}
          <SectionHeading
            id="reviewProfile"
            selected={section === Section.reviewProfile}
            label={"Review profile"}
            onClick={() => setSection(Section.reviewProfile)}
          />
        </div>

        <form className="pl-10 pt-10 flex flex-col">
          {section === Section.title && <TitleAndBio />}
          {section === Section.skills && <Skills />}
          {section === Section.experience && <GitHubProfile />}
          {/* {section === Section.contactInfo && <ContactInfo />} */}
          {section === Section.reviewProfile && (
            <>
              <div className="flex-1">
                <ReviewProfile {...getUserProfileStore()} />
              </div>

              <Button
                className="bg-lightBlue border border-themeBlue mb-2 rounded-md"
                id="saveProfile"
                type="submit"
                onClick={() => {
                  alert("Profile saved successfully!");
                  handleFormErrors();
                  formSubmitted();
                }}
                text="Save profile"
              />
            </>
          )}
        </form>
      </div>
    </div>
  );
});

export default UserProfile;

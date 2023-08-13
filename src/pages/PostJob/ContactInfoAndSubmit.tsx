import React from "react";
import { TextField } from "../../components";
import { getPostJobStore } from "./@data/store";
import { setCompanyHQ, setCompanyName, setCountry, setMobileNumber, setPhoneNumber } from "./@data/mutatorActions";
import { observer } from "mobx-react";
import { Button } from "../../components/Button/Button";

export const ContactInfoAndSubmit = observer(() => {
  const { companyName, city, country, mobileNumber, phoneNumber } = getPostJobStore().companyInfo;
  return (
    <>
      <TextField label="Company name" id="companyName" value={companyName} onChange={setCompanyName} />

      <TextField label="Company headquarters/city" id="companyHQ" value={city} onChange={setCompanyHQ} />
      <TextField label="Country" id="country" value={country} onChange={setCountry} />
      <TextField label="Phone number" id="phoneNumber" placeholder="Enter phone number" value={phoneNumber} onChange={setPhoneNumber} />
      <TextField
        label="Mobile number"
        id="mobileNumber"
        placeholder="Enter mobile no. with country code"
        value={mobileNumber}
        onChange={setMobileNumber}
      />

      <Button
        className="bg-lightBlue border border-themeBlue mb-2"
        id="submit"
        type="submit"
        onClick={() => {
          alert("Job posted successfully!");
        }}
        text="Submit job"
      />
    </>
  );
});

import React from "react";
import { TextField } from "../../components";
import { observer } from "mobx-react";
import { Button } from "../../components/Button/Button";
import { getUserProfileStore } from "./@data/store";
import { setAddressLine1, setAddressLine2, setCity, setCountry, setMobileNumber, setStateOrProvince, setZipCode } from "./@data/mutatorActions";

export const ContactInfoAndSubmit = observer(() => {
  const { addressline1, addressline2, city, stateOrProvince, country, zipCode, mobileNumber } = getUserProfileStore().contactInfo;
  return (
    <>
      <div className="flex gap-2">
        <TextField label="Address line 1" id="addressline1" value={addressline1} onChange={setAddressLine1} />
        <TextField label="Address line 2" id="addressline2" value={addressline2} onChange={setAddressLine2} />
      </div>
      <div className="flex gap-2">
        <TextField label="City" id="city" value={city} onChange={setCity} />
        <TextField label="State Or Province" id="stateOrProvince" value={stateOrProvince} onChange={setStateOrProvince} />
      </div>
      <div className="flex gap-2">
        <TextField label="Country" id="country" value={country} onChange={setCountry} />
        <TextField label="Zip code" id="zipCode" value={zipCode} onChange={setZipCode} />
      </div>

      <TextField
        label="Mobile number"
        id="mobileNumber"
        placeholder="Enter mobile no. with country code"
        value={mobileNumber}
        onChange={setMobileNumber}
      />

      <Button
        className="bg-lightBlue border border-themeBlue mb-2"
        id="saveProfile"
        type="submit"
        onClick={() => {
          alert("Profile saved successfully!");
        }}
        text="Save profile"
      />
    </>
  );
});

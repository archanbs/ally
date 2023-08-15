import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import "./LoginPage.styles.css";
import { updatePassword } from "./@data/services/loginServices";

export const ForgotPassword = function ({ email }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userEmail, setEmail] = useState(email);

  return (
    <>
      <div className="w-[100%] text-center my-2 text-[20px]">Update password</div>
      <input className="rounded" id="email" type="email" value={userEmail} onChange={(ev) => setEmail(ev.target.value)} placeholder="Enter email" />

      <input
        className="rounded"
        id="newPassword"
        type="password"
        value={newPassword}
        onChange={(ev) => setNewPassword(ev.target.value)}
        placeholder="Enter new password"
      />
      <input
        className="rounded"
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(ev) => setConfirmPassword(ev.target.value)}
        placeholder="Confirm password"
      />

      {newPassword && confirmPassword && newPassword !== confirmPassword ? (
        <span id="error-message" className="error-message">
          Passwords does not match
        </span>
      ) : null}

      <Button className="border border-themeBlue rounded-xl my-2" onClick={() => updatePassword(userEmail, newPassword)} text={"Update"} />
    </>
  );
};

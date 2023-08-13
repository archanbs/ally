import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import "./LoginPage.styles.css";

export const ForgotPassword = function ({ email }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userEmail, setEmail] = useState(email);

  function updatePassword(userEmail: any, newPassword: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div style={{ width: "32px" }} />
      <input id="email" type="email" value={userEmail} onChange={(ev) => setEmail(ev.target.value)} placeholder="Enter email" />

      <input
        id="newPassword"
        type="password"
        value={newPassword}
        onChange={(ev) => setNewPassword(ev.target.value)}
        placeholder="Enter new password"
      />
      <input
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

      <Button onClick={() => updatePassword(userEmail, newPassword)} text={"Update password"} />
    </>
  );
};

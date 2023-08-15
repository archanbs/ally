import React, { useState } from "react";
import { loginUser } from "./@data/loginServices";
import { ForgotPassword } from "./ForgotPassword";
import { Button } from "../../components/Button/Button";
import "./LoginPage.styles.css";

export const enum UserType {
  Freelancer = 1,
  Employer = 2,
}

export const LoginPage = function () {
  const [userType, setUserType] = useState(UserType.Freelancer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  const renderLoginForm = () => {
    return (
      <>
        <div className="usertype-selector">
          <Button
            className="bg-[lightblue] border-b-[lightblue] border-2 border-[#fff] min-[200px]"
            onClick={() => setUserType(UserType.Freelancer)}
            text={"Freelancer"}
          />
          <Button
            className="bg-[#e8b5d0] border-b-[#e8b5d0] border-2 border-[#fff] min-[200px]"
            onClick={() => setUserType(UserType.Employer)}
            text={"Employer"}
          />
        </div>

        <h1>{`Login as ${userType === UserType.Freelancer ? "Freelancer" : "Employer"}`}</h1>

        <input className="textbox" id="email" type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} placeholder="Enter email" />

        <input
          className="textbox"
          id="password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="Enter password"
        />

        <Button
          className="forgot-password-button"
          type="button"
          id={"forgotPassword"}
          onClick={(ev) => setForgotPassword(true)}
          text={"Forgot password?"}
        />
        <Button
          className="text-[white] bg-themeBlue p-[6px] rounded-md hover:bg-[#1560bd] px-[20px]"
          type="submit"
          onClick={() => loginUser(email, password, userType)}
          text={"Login"}
        />
      </>
    );
  };

  return (
    // <div className="login-background">
    <form className="login-container" style={{ backgroundColor: userType === UserType.Employer ? "#e8b5d0" : "lightblue" }}>
      {!forgotPassword ? renderLoginForm() : <ForgotPassword email={email} />}
    </form>
    // </div>
  );
};

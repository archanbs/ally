import React, { useState } from "react";
import { ForgotPassword } from "./ForgotPassword";
import { Button } from "../../components/Button/Button";
import "./LoginPage.styles.css";
import { observer } from "mobx-react";
import { onLoginFormSubmitted } from "./@data/loginFormSubmitted";
import "./@data";
import { setEmail, setPassword } from "./@data/mutatorActions";
import { getLoginStore } from "./@data/store";

export const enum UserType {
  Freelancer = 1,
  Employer = 2,
}

export const LoginPage = observer(() => {
  const [userType, setUserType] = useState(UserType.Freelancer);
  const [forgotPassword, setForgotPassword] = useState(false);
  const { email, password, passwordDoesNotMatch, loginErrors } = getLoginStore();

  const renderLoginForm = () => {
    return (
      <>
        <div className="usertype-selector">
          <Button
            className="bg-[lightblue] border-b-[lightblue] border-2 border-[#fff] w-[200px] rounded-sm"
            onClick={() => setUserType(UserType.Freelancer)}
            text={"Freelancer"}
          />
          <Button
            className="bg-[#e8b5d0] border-b-[#e8b5d0] border-2 border-[#fff] min-[200px]  w-[200px] rounded-sm"
            onClick={() => setUserType(UserType.Employer)}
            text={"Employer"}
          />
        </div>

        <h1>{`Login as ${userType === UserType.Freelancer ? "Freelancer" : "Employer"}`}</h1>

        <input className="textbox" id="email" type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} placeholder="Enter email" />
        {loginErrors && loginErrors["email"] && <span className="text-[red] text-left text-sm">{loginErrors["email"]}</span>}

        <input
          className="textbox"
          id="password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="Enter password"
        />
        {loginErrors && loginErrors["password"] && <span className="text-[red] text-left text-sm">{loginErrors["password"]}</span>}
        {passwordDoesNotMatch && <span className="text-[red] text-left text-sm">{"Incorrect password"}</span>}

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
          onClick={() => onLoginFormSubmitted(userType)}
          text={"Login"}
        />
      </>
    );
  };

  return (
    <form
      className="login-container"
      style={{ backgroundColor: userType === UserType.Employer ? "#e8b5d0" : "lightblue" }}
      onSubmit={(ev) => ev.preventDefault()}
    >
      {!forgotPassword ? renderLoginForm() : <ForgotPassword email={email} />}
    </form>
  );
});

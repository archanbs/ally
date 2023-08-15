import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { USER_EMAIL_KEY } from "../../App.constants";
import { logoutUser } from "../../pages/LoginPage/@data/services/loginServices";
import { fetchUserType } from "../../@data/utils/fetchUserType";
import { UserType } from "../../pages/LoginPage/LoginPage";

const Header = () => {
  const isUserLoggedIn = localStorage.getItem(USER_EMAIL_KEY);
  const [isProfilePopUpShown, setProfilePopUpShown] = useState(false);
  const userType = fetchUserType();
  const userEmail = localStorage.getItem(USER_EMAIL_KEY);

  return (
    <>
      <div className="header flex justify-between items-center p-[1rem] border-b border-b-gray-400 px-[4rem]">
        <div className="logoDiv">
          <h1 className="logo text-[24px] text-themeBlue">Freelance</h1>
        </div>

        <ul className="menu flex gap-8 align-middle">
          <li className="menuList text-[#6f6f6f] hover:text-themeBlue self-center">
            <Link to="/">Search for Jobs</Link>
          </li>
          {!isUserLoggedIn && (
            <li className="menuList text-[#6f6f6f] hover:text-themeBlue self-center">
              <Link to="/login">Login</Link>
            </li>
          )}
          {userType === UserType.Employer && (
            <>
              <li className="menuList text-[#6f6f6f] hover:text-themeBlue self-center">
                <Link to="/viewMyJobs">View your jobs</Link>
              </li>
              <li className="menuList text-[white] bg-themeBlue p-[6px] rounded-md hover:bg-[#1560bd] px-[10px]">
                <Link to="/postJob">Post a job</Link>
              </li>
            </>
          )}

          {isUserLoggedIn && (
            <li
              className="menuList  text-[#6f6f6f] hover:text-themeBlue w-8 h-8 p-2 rounded-2xl self-center border border-gray-400"
              onClick={(ev) => {
                ev.preventDefault();
                setProfilePopUpShown(!isProfilePopUpShown);
                console.log("profile button clicked");
              }}
            >
              <BsFillPersonFill />
            </li>
          )}
        </ul>
      </div>
      {isProfilePopUpShown && (
        <div className="absolute top-[56px] right-[32px] border border-gray-400 bg-white w-48">
          <div
            className="border-b border-b-gray-300 p-2 text-center cursor-auto text-[13px]"
            onClick={(ev) => {
              ev.preventDefault();
              setProfilePopUpShown(!isProfilePopUpShown);
            }}
          >
            {userEmail}
          </div>
          {/* <div
            className="border-b border-b-gray-300 p-2 text-center cursor-pointer"
            onClick={(ev) => {
              ev.preventDefault();
              setProfilePopUpShown(!isProfilePopUpShown);
            }}
          >
            <Link to="/create-profile">Update profile</Link>
          </div> */}
          <div
            className="text-center cursor-pointer p-2"
            onClick={(ev) => {
              ev.preventDefault();
              setProfilePopUpShown(!isProfilePopUpShown);
              logoutUser();
            }}
          >
            <Link to="/">Logout</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

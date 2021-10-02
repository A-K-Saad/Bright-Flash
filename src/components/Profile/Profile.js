import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import "../Form.css";

const Profile = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  console.log(loggedUser);
  return (
    <>
      <Navbar />
      <div className="users-container m-auto">
        <div className="p-8 w-full form-bg grid relative user-form">
          <div className="flex items-center flex-col text-white">
            <img
              src={loggedUser.avatar}
              alt="User Pic"
              className="profile-pic"
            />
            <h3 className="text-xl pt-4">Name: {loggedUser.name}</h3>
            <h3 className="text-xl pt-2">Email: {loggedUser.email}</h3>
            <h3 className="text-xl pt-2">Password: "{loggedUser.password}"</h3>
            <h3 className="text-xl pt-2">Gender: {loggedUser.gender}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

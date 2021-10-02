import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import "../Form.css";

const Users = () => {
  const users = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <Navbar />
      <div className="users-container m-auto">
        <div className="p-8 w-full form-bg grid relative user-form">
          {users.map((user) => {
            return (
              <div className="flex items-center my-2">
                <img src={user.avatar} alt="User Pic" className="user-pic" />
                <h3 className="text-lg pl-3 text-white">{user.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;

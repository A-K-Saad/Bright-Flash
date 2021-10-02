import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setLoggedIn }) => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("loggedUser");
    setLoggedIn(false);
    history.push("/login");
  };

  return (
    <header className="bg-gray-800 bg-opacity-75 p-3 flex items-center justify-between sticky">
      <div className="navbar-brand flex items-center">
        <img
          src="https://www.freeiconspng.com/uploads/no-image-icon-13.png"
          alt="NavbarBrand"
        />
        <h1 className="text-4xl text-blue-400 pl-3">Bright Flash</h1>
      </div>
      <nav>
        <ul className="text-yellow-100 text-lg flex items-center">
          <li className="px-3 hover:text-yellow-200">
            <NavLink exact to="/" activeClassName="text-yellow-500">
              Home
            </NavLink>
          </li>
          <li className="px-3 hover:text-yellow-200">
            <NavLink to="/users" activeClassName="text-yellow-500">
              Users
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink to="/profile">
              <img
                src={loggedUser?.avatar}
                alt="User-Pic"
                className="user-pic"
              />
            </NavLink>
          </li>
          <button
            className="bg-blue-300 mx-5 px-3 text-white rounded text-base py-2"
            onClick={logout}
          >
            Logout
            <i className="fas fa-sign-out-alt pl-2"></i>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

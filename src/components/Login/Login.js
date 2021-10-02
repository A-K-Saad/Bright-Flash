import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Form.css";

const Login = ({ setLoggedIn }) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const data = JSON.parse(localStorage.getItem("data"));
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const togglePassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const exist = data?.find((user) => user?.email === email);

    if (exist) {
      //Setting the login user
      if (exist.password === password) {
        localStorage.setItem("loggedUser", JSON.stringify(exist));
        // history.push("/");
        setLoggedIn(true);
      } else if (exist.password !== password) {
        alert("Invalid Password");
        return;
      }
    } else {
      alert(`"${email}" is not yet signed up!`);
      return;
    }
  };

  return (
    <div className="form m-auto">
      <form
        className="p-8 w-full text-center grid relative form-bg"
        onSubmit={(event) => handleSubmit(event)}
      >
        <h1 className="text-3xl text-white text-center pb-4">Login</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="border px-2 py-2 outline-none focus:ring focus:border-indigo-100 duration-500 w-full my-2 border-none pl-14"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <i className="fas fa-envelope email-icon"></i>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Type a password"
          className="border px-2 py-2 outline-none focus:ring focus:border-indigo-100 duration-500 w-full my-2 border-none pl-14"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <i className="fas fa-lock password-icon"></i>
        <i
          className={`${
            showPassword ? "far fa-eye-slash eye-icon" : "far fa-eye eye-icon"
          }`}
          onClick={togglePassword}
        ></i>
        <button
          className="mt-2 bg-gradient-to-b from-red-500 to-red-600 text-white py-3 outline-none"
          type="submit"
        >
          Login
        </button>
        <p className="text-white pt-4">
          Don't have account?{" "}
          <span className="italic text-blue-700">
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

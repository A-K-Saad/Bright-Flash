import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "../Form.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("https://i.ibb.co/qgbdqZ3/male.png");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [exist, setExist] = useState({});
  let history = useHistory();

  const emptyData = [];
  const storedData = JSON.parse(localStorage.getItem("data"));
  if (!storedData) {
    localStorage.setItem("data", JSON.stringify(emptyData));
  }

  // let link = document.querySelector("link[rel*='icon']");
  // link.href = avatar;
  // document.getElementsByTagName("head")[0].appendChild(link);

  const handleSubmit = (event) => {
    event.preventDefault();
    storeData();
  };

  const storeData = () => {
    const previousData = JSON.parse(localStorage.getItem("data"));
    const userData = {
      name: name,
      email: email,
      avatar: avatar,
      password: password,
      gender: gender,
    };
    if (previousData) {
      const exist = previousData.find((el) => el?.email === email);
      setExist(exist);
      if (exist) {
        return;
      } else {
        previousData.push(userData);
      }
    }
    localStorage.setItem("data", JSON.stringify(previousData));
    history.push("/login");
    // window.location = "/login";
  };

  const togglePassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <div className="form m-auto">
      <form
        className="p-8 w-full form-bg text-center grid relative"
        onSubmit={(event) => handleSubmit(event)}
      >
        <img
          src={avatar}
          alt="Avatar"
          className="avatar-pic"
          onError={(event) => {
            event.target.src = "https://i.ibb.co/qgbdqZ3/male.png";
            setAvatar("https://i.ibb.co/qgbdqZ3/male.png");
          }}
        />
        <input
          type="text"
          placeholder="Enter your name"
          className="border px-2 py-2 outline-none focus:ring focus:border-blue-300 duration-500 w-full my-2 border-none pl-14"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <i className="fas fa-signature"></i>
        <input
          type="email"
          placeholder="Enter your email"
          className="border px-2 py-2 outline-none focus:ring focus:border-blue-300 duration-500 w-full my-2 border-none pl-14"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <i className="fas fa-envelope"></i>
        <input
          type="url"
          placeholder="Avatar URL"
          className="border px-2 py-2 outline-none focus:ring focus:border-blue-300 duration-500 w-full my-2 border-none pl-14"
          onChange={(event) => setAvatar(event.target.value)}
        />
        <i className="fas fa-link"></i>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Type a password"
          className="border px-2 py-2 outline-none focus:ring focus:border-blue-300 duration-500 w-full my-2 border-none pl-14"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <i className="fas fa-lock"></i>
        <i
          className={`${showPassword ? "far fa-eye-slash" : "far fa-eye"}`}
          onClick={togglePassword}
        ></i>
        <select
          name="gender"
          id="gender"
          className="py-2 text-center outline-none my-2"
          required
          onChange={(event) => setGender(event.target.value)}
        >
          <option disabled defaultValue selected value>
            -- Select Your Gender --
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button
          className="mt-2 bg-gradient-to-b from-red-500 to-red-600 text-white py-3 outline-none"
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-white pt-4">
          Already have account?{" "}
          <span className="italic text-blue-700">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;

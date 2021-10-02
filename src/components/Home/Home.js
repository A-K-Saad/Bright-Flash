import React from "react";
import Images from "../Images/Images";
import Navbar from "./Navbar/Navbar";
import "./Home.css";

const Home = ({ setLoggedIn }) => {
  return (
    <div>
      <Navbar setLoggedIn={setLoggedIn} />
      <div className="wrapper">
        <Images />
      </div>
    </div>
  );
};

export default Home;

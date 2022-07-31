import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <div>
        <Welcome />
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;

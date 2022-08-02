import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Certificate from "../Certificate/Certificate";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <AboutMe />
      <Skills />
      <Projects />
      <Certificate />
      <Contact />
    </div>
  );
};

export default Home;

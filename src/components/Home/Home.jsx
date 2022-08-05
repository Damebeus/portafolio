import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Certificate from "../Certificate/Certificate";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Welcome from "../Welcome/Welcome";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <section className={style.sec1}>
        {" "}
        <Welcome />
      </section>
      <section className={style.sec2}>
        <AboutMe />
      </section>
      <section className={style.sec3}>
        {" "}
        <Skills />
      </section>
      <section className={style.sec4}>
        {" "}
        <Projects />
      </section>
      <section className={style.sec5}>
        {" "}
        <Certificate />
      </section>
      <section className={style.sec6}>
        {" "}
        <Contact />
      </section>
    </div>
  );
};

export default Home;

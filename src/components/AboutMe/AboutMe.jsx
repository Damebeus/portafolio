import React from "react";
import style from "./AboutMe.module.css";
import perfil from "./perfil.png";
const AboutMe = () => {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <div className={style.imagen}>
          <img src={perfil} alt='' height={250} width={250} />
        </div>
        <div className={style.texto}>
          <div className={style.infoText}>
            <p>I work in</p>
            <ul>
              <li>Front-End</li>
              <li className={style.nombreBack}> Back-End</li>
              <li className={style.nombrePersonal}>Full-Stack</li>
            </ul>
          </div>
          <div className={style.bot}>
            <p>
              Soy un desarrollador web con experiencia en desarrollo de
              aplicaciones web. Me gusta trabajar con tecnologías como React,
              NodeJS, MongoDB, Mongoose, Express, etc. Me gusta trabajar con
              frameworks como React, Angular, etc. Me gusta trabajar con
              herramientas como Git, GitHub, etc.
            </p>
            <div className={style.buttons}>
              <button className={style.slide}>
                <a
                  href='https://drive.google.com/file/d/1O5yOnOxjiIwpSMByYXTdi0xMKvlT3lfu/view?usp=sharing'
                  target='_blank'
                  download
                >
                  {" "}
                  Watch my CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.mouseScroll}>
        <div className={style.arrowScroll}></div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import style from "./AboutMe.module.css";
import styleNote from "./NoteAboutMe.module.css";
import perfil from "./perfil.png";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import NoteAbout from "./NoteAbout";
const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: false });
  }, []);

  const { t, i18n } = useTranslation("global");

  return (
    <section className={style.section} id='About'>
      <div className={style.containerPrincipal}>
        <div className={style.subcontainer}>
          <div className={style.imagen} data-aos='fade-right'>
            <img
              id='perfil'
              className={style.scroll}
              src={perfil}
              alt=''
              height={250}
              width={250}
            />
            <div className={style.botoncitos}>
              <a href='https://github.com/Damebeus' target='_blank'>
                <AiFillGithub />
              </a>
              <a href='https://www.instagram.com/damian_ebeus/' target='_blank'>
                <AiOutlineInstagram />
              </a>
              <a
                href='https://www.linkedin.com/in/damian-ebeus/'
                target='_blank'
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div className={style.texto} data-aos='fade-up'>
            <div className={style.infoText}>
              <p>{t("AboutMe.Flasher")}</p>
              <ul>
                <li>Front-End</li>
                <li className={style.nombreBack}> Back-End</li>
                <li className={style.nombrePersonal}>Full-Stack</li>
              </ul>
            </div>

            <div className={style.bot}>
              <p>
                {t("AboutMe.bio")}
                <br></br>
                {t("AboutMe.bio2")}
              </p>
              <div className={style.buttons}>
                <button className={style.slide}>
                  <a
                    href='https://drive.google.com/file/d/1AW0pya3TDP1CE7zF81A6yR4t4Mb-b_CZ/view?usp=sharing'
                    target='_blank'
                    download
                  >
                    {" "}
                    {t("AboutMe.cv")}
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
      {/* notebook */}
      <div className={style.containerNote}>
        <NoteAbout />
      </div>
    </section>
  );
};

export default AboutMe;

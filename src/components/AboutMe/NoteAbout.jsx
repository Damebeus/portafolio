import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import styleNote from "./NoteAboutMe.module.css";
import perfil from "./perfil.png";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: false });
  }, []);

  const { t, i18n } = useTranslation("global");

  return (
    <section className={styleNote.section} id='About'>
      <div className={styleNote.containerPrincipal}>
        <div className={styleNote.subcontainer}>
          <div className={styleNote.imagen} data-aos='fade-right'>
            <img
              id='perfil'
              className={styleNote.scroll}
              src={perfil}
              alt=''
              height={250}
              width={250}
            />
          </div>
          <div className={styleNote.buttons}>
            <button className={styleNote.slide}>
              <a
                href='https://drive.google.com/file/d/1Dw69qOTdnEoHAE9KZ6i2sCEE_dQit4OF/view?usp=sharing'
                target='_blank'
                download
              >
                {t("AboutMe.cv")}
              </a>
            </button>
          </div>
        </div>
        <div className={styleNote.subcontainer2} data-aos='fade-up'>
          <div className={styleNote.transicion}>
            <div className={styleNote.infoText}>
              <p>{t("AboutMe.Flasher")}</p>
              <ul>
                <li>Front-End</li>
                <li className={styleNote.nombreBack}> Back-End</li>
                <li className={styleNote.nombrePersonal}>Full-Stack</li>
              </ul>
            </div>
            <div className={styleNote.botoncitos}>
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
          <div className={styleNote.bot}>
            <p>
              {t("AboutMe.bio")}
              <br></br>
              {t("AboutMe.bio2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

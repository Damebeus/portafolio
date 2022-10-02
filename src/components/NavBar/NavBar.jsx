import React, { useState } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-scroll";
import es from "./es.png";
import en from "./en.png";
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const { t, i18n } = useTranslation("global");
  const [navbar, setNavbar] = useState(false);

  const changeBgc = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBgc);

  return (
    <div className={navbar ? style.container : style.container2}>
      <div className={style.lenguaje}>
        <button onClick={() => i18n.changeLanguage("en")}>
          <img src={en} />
        </button>
        <button onClick={() => i18n.changeLanguage("es")}>
          <img src={es} />
        </button>
      </div>
      <div className={style.botones}>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Home'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.Home")}
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='About'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.About")}
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Skills'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.Skills")}
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Projects'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.Projects")}
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Certificate'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.Certificates")}
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Contact'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.Contact")}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

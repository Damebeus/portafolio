import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.botones}>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Home'
          spy={true}
          smooth={true}
          duration={800}
        >
          Home
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='About'
          spy={true}
          smooth={true}
          duration={800}
        >
          About
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Skills'
          spy={true}
          smooth={true}
          duration={800}
        >
          Skills
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Projects'
          spy={true}
          smooth={true}
          duration={800}
        >
          Projects
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Certificate'
          spy={true}
          smooth={true}
          duration={800}
        >
          Certificates
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Contact'
          spy={true}
          smooth={true}
          duration={800}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

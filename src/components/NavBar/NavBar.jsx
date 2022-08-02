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
          <label>Home</label>
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='About'
          spy={true}
          smooth={true}
          duration={800}
        >
          <label>About</label>
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Skills'
          spy={true}
          smooth={true}
          duration={800}
        >
          <label>Skills</label>
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Projects'
          spy={true}
          smooth={true}
          duration={800}
        >
          <label>Projects</label>
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Certificate'
          spy={true}
          smooth={true}
          duration={800}
        >
          <label>Certificates</label>
        </Link>
        <label>Contact</label>
      </div>
    </div>
  );
};

export default NavBar;

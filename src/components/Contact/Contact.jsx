import React, { useEffect } from "react";
import style from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import "aos/dist/aos.css";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: false });
  }, []);
};

export default Contact;

import React from "react";
import style from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
const Contact = () => {
  return (
    <section className='section' id='Contact'>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Contact </h1>
        </div>

        <div className={style.columna}>
          <div className={style.columnaForm}>
            <div className={style.formInput}>
              <form>
                <div className={style.row}>
                  <div className={style.formGroup}>
                    <input type='text' id='name' required />
                    <label htmlFor='name'>
                      <AiOutlineUser />
                       Name
                    </label>
                  </div>
                  <div className={style.formGroup}>
                    <input type='text' id='number' required />
                    <label htmlFor='text'>
                      <AiOutlinePhone />
                       Number
                    </label>
                  </div>
                </div>
                <div className={style.formGroup}>
                  <input type='email' id='email' required />
                  <label htmlFor='email'>
                    <AiOutlineMail />  Email
                  </label>
                </div>
                <div className={style.formGroup}>
                  <textarea id='message' rows={8} required></textarea>
                  <label htmlFor='message'>
                    <BiMessageDetail />
                     Message
                  </label>
                </div>
                <div className={style.btn}>
                  <button className={style.slide} type='submit'>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className={style.columnaInfo}>
            <div className={style.botoncitos}>
              <a href='https://github.com/Damebeus' target='_blank'>
                <AiFillGithub />
              </a>
              <a href='https://www.instagram.com/damebeus/' target='_blank'>
                <AiOutlineInstagram />
              </a>
              <a href='https://www.linkedin.com/in/damebeus/' target='_blank'>
                <AiFillLinkedin />
              </a>
            </div>
            <div className={style.ubicacion}>
              <div className={style.ubicacionIcon}>
                <SiGooglemaps />
                <a href='https://goo.gl/maps/dzzs4P3exzRDP3AA7' target='_blank'>
                  <p>Argentina - Villa Carlos Paz</p>
                </a>
                <hr />
                <p>Povincia de Cordoba</p>
              </div>
              <div className={style.emailIcon}>
                <AiOutlineMail />
                <p>
                  <a href='mailto:damiebeus@gmail.com'>
                    <p>damiebeus@gmail.com</p>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

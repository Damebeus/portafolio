import React, { useEffect } from "react";
import style from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { useTranslation } from "react-i18next";

import { SiGooglemaps } from "react-icons/si";
import "aos/dist/aos.css";
import Aos from "aos";
import Swal from "sweetalert2";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const { t, i18n } = useTranslation("global");
  useEffect(() => {
    Aos.init({ duration: 2000, once: false });
  }, []);

  const [state, handleSubmit] = useForm("xqkjzvoq");

  if (state.succeeded) {
    Swal.fire("Message sent!", "thanks you for contacting me.", "success").then(
      () => {
        window.location.reload();
      }
    );
  }
  return (
    <section className='section' id='Contact'>
      <div className={style.container}>
        <div className={style.title}>
          <h1>{t("NavBar.Contact")}</h1>
        </div>

        <div className={style.columna}>
          <div className={style.columnaForm}>
            <div className={style.formInput}>
              <form onSubmit={handleSubmit}>
                <div className={style.row} data-aos='fade-right'>
                  <div className={style.formGroup}>
                    <input type='text' id='name' required />
                    <label htmlFor='name'>
                      <AiOutlineUser /> {t("Contact.Name")}
                    </label>
                  </div>
                  <div className={style.formGroup}>
                    <input type='tel' id='number' required />
                    <label htmlFor='text'>
                      <AiOutlinePhone /> {t("Contact.Number")}
                    </label>
                  </div>
                </div>
                <div className={style.formGroup} data-aos='fade-left'>
                  <input type='email' id='email' name='email' required />
                  <label htmlFor='email'>
                    <ValidationError
                      prefix='Email'
                      field='email'
                      errors={state.errors}
                    />
                    <AiOutlineMail />  {t("Contact.Email")}
                  </label>
                </div>
                <div className={style.formGroup} data-aos='fade-right'>
                  <textarea
                    id='message'
                    name='message'
                    rows={8}
                    required
                  ></textarea>
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                  <label>
                    <BiMessageDetail />  {t("Contact.Message")}
                  </label>
                </div>
                <div className={style.btn} data-aos='fade-up'>
                  <button
                    className={style.slide}
                    type='submit'
                    disabled={state.submitting}
                  >
                    {t("Contact.Send")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

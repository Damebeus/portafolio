import React from "react";
import style from "./Welcome.module.css";

const Welcome = () => {
  return (
    <section className={style.section} id='Home'>
      <div className={style.container}>
        <div className={style.rain}>
          <div className={style.raindrop}></div>
          <div className={style.titulo}>
            <h2>
              <div className={style.letras}>
                <span>
                  <i></i>D
                </span>
                <span>
                  <i></i>A
                </span>
                <span>
                  <i></i>M
                </span>
                <span>
                  <i></i>I
                </span>
                <span>
                  <i></i>A
                </span>
                <span>
                  <i></i>N
                </span>
              </div>
              <div className={style.letras2}>
                <span>
                  <i></i>E
                </span>
                <span>
                  <i></i>B
                </span>
                <span>
                  <i></i>E
                </span>
                <span>
                  <i></i>U
                </span>
                <span>
                  <i></i>S
                </span>
              </div>
            </h2>
          </div>
          <div className={style.mouseScroll}>
            <div className={style.arrowScroll}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

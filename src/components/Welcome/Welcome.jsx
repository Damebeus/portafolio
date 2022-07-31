import React from "react";
import style from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={style.container}>
      <div className={style.rain}>
        <div className={style.raindrop}></div>
        <div className={style.titulo}>
          <h2>
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
            <span>　</span>
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
          </h2>
        </div>
        <div className={style.mouseScroll}>
          <div className={style.arrowScroll}></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

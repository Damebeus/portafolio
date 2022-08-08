return (
  <section className='section' id='Contact'>
    <div className={style.container}>
      <div className={style.title}>
        <h1>Contact </h1>
      </div>

      <div className={style.columna}>
        <div className={style.columnaForm} data-aos='fade-right'>
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
        <div className={style.columnaInfo} data-aos='fade-up'>
          <div className={style.ubicacion}>
            <div className={style.ubicacionIcon}>
              <SiGooglemaps />
              <a href='https://goo.gl/maps/dzzs4P3exzRDP3AA7' target='_blank'>
                <p>Argentina - Villa Carlos Paz</p>
              </a>
              <hr />
              <a href='https://goo.gl/maps/dzzs4P3exzRDP3AA7' target='_blank'>
                <p>Provincia de Cordoba</p>
              </a>
            </div>
          </div>
          {/*   <div className={style.columnaInfo} data-aos='fade-left'> */}
          <div className={style.ubicacion}>
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
          <div className={style.ubicacion}>
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
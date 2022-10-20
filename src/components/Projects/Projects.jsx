import React, { useEffect } from "react";
import style from "./Projects.module.css";
import Slider from "../Proslider/Proslider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Projects = () => {
  const { t, i18n } = useTranslation("global");
  const mockImagenes = [
/*     {
      link: "https://pistacho.vercel.app/",
      url: "https://img.freepik.com/vector-gratis/mano-humana-sosteniendo-telefono-movil_74855-6532.jpg?w=2000",
      name: t("Projects.Pistacho"),
      description: t("Projects.PistachoDesc"),
    }, */
    {
      link: "https://anycpu.vercel.app/",
      url: "https://res.cloudinary.com/cordoba/image/upload/v1664743560/random/blacklogo_ddejp3.png",
      name: t("Projects.Any"),
      description: t("Projects.AnyDesc"),
    },
    {
      link: "https://www.youtube.com/watch?v=wTtGhWYh35c&t=121s",
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659491911/random/folderVideogames_f3owo1.png",
      name: t("Projects.Videogames"),
      description: t("Projects.VideogamesDesc"),
    },
    {
      link: "https://countries-pi-ten.vercel.app/",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png",
      name: t("Projects.Countries"),
      description: t("Projects.CountriesDesc"),
    },
    {
      link: "https://pf-eccomerce.vercel.app/",
      url: "https://res.cloudinary.com/dbgreenshop/image/upload/v1659245320/wwwww-removebg-preview_v51ufv.png",
      name: t("Projects.GrowShop"),
      description: t("Projects.GrowShopDesc"),
    },
    {
      link: "https://portafolio-one-chi.vercel.app/",
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659944396/random/sho-removebg-preview_g0okw0.png",
      name: t("Projects.Portfolio"),
      description: t("Projects.PortfolioDesc"),
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className={style.section} id='Projects'>
      <div className={style.container}>
        <div className={style.title}>
          <h1>{t("NavBar.Projects")}</h1>
        </div>
        <div data-aos='fade-right' className={style.carru}>
          <Slider imagenes={mockImagenes} />
        </div>
        <div className={style.mouseScroll}>
          <div className={style.arrowScroll}></div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Projects;

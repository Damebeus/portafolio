import React, { useEffect } from "react";
import style from "./Projects.module.css";
import Slider from "../Proslider/Proslider";
import Aos from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const mockImagenes = [
    {
      link: "https://www.youtube.com/watch?v=wTtGhWYh35c&t=121s",
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659491911/random/folderVideogames_f3owo1.png",
      name: "APP Videogames",
      description:
        "application with a Rawg.io api with Videogame information, filters by Name, genres, reputation. Relational database with user-created video games",
    },
    {
      link: "https://countries-pi-ten.vercel.app/",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png",
      name: "APP Countries",
      description:
        "application with a rest api with country information, filters by territorial information and relational database with activity proposals by country",
    },
    {
      link: "https://pf-eccomerce.vercel.app/",
      url: "https://res.cloudinary.com/dbgreenshop/image/upload/v1659245320/wwwww-removebg-preview_v51ufv.png",
      name: "Grow shop Eccomerce",
      description:
        "Functional ecommerce with a Grow-shop theme, it has a shopping cart, Mercado pago, register and login with firebase, a relational database that saves user purchases and an administrator panel.",
    },
    {
      link: "https://portafolio-one-chi.vercel.app/",
      url: "https://images.fineartamerica.com/images/artworkimages/medium/2/retro-80s-90s-vaporwave-palm-trees-gift-pink-blue-design-design-dc-designs-suamaceir-transparent.png",
      name: "This portafolio",
      description:
        "It is a small project that has just started but I hope to be able to expand with my skills over time",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className={style.section} id='Projects'>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Projects</h1>
        </div>
        <div data-aos='fade-right'>
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

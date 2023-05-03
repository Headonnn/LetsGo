import React from "react";
import "../style/_recommandation.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Recommandation() {
  const carousel = [
    {
      title: "Evènements",
      image: "./src/assets/images/evenements.jpg",
    },
    {
      title: "Patrimoine",
      image: "./src/assets/images/patrimoine.jpg",
    },
    {
      title: "Activites",
      image: "./src/assets/images/activites.jpg",
    },
  ];

  return (
    <>
      <div className="categories_title">Recommandation</div>
      <div className="carousel_size">
        <Carousel autoPlay interval={10000} infiniteLoop showStatus={false}>
          {carousel.map((slide) => (
            <>
              <div key={slide.title} />
              <img src={slide.image} alt="" />
              <div className="overlay">
                <h2 className="overlay_title">{slide.title}</h2>
              </div>
            </>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Recommandation;

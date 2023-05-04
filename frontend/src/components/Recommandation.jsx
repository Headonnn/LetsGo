import React from "react";
import "../style/_recommandation.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";

function Recommandation({ setCateg }) {
  const handleClickCoeur = (e) => {
    setCateg(e.target.id);
  };
  const carousel = [
    {
      title: "Exposition",
      titletrue: "Exposition",
      image: "./src/assets/images/expo.jpg",
    },
    {
      title: "Théâtre",
      titletrue: "Théâtre",
      image: "./src/assets/images/theatre1.jpg",
    },
    {
      title: "Rallye",
      titletrue: "Rallye",
      image: "./src/assets/images/rally.jpg",
    },
  ];

  return (
    <>
      <div className="recommandation_title2">Les coups de coeur</div>
      <div className="carousel_size2">
        <Carousel autoPlay interval={10000} infiniteLoop showStatus={false}>
          {carousel.map((slide) => (
            <div
              key={slide.title}
              onClick={(e) => handleClickCoeur(e)}
              onKeyDown={(e) => handleClickCoeur(e)}
              role="presentation"
            >
              <img src={slide.image} alt="" />
              <div className="overlay2">
                <h2 className="overlay_title2">{slide.title}</h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Recommandation;

Recommandation.propTypes = {
  setCateg: PropTypes.string.isRequired,
};

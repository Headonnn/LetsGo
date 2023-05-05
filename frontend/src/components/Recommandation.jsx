import React from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";
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
      <div className="categories_title">Les coups de coeur</div>
      <div className="carousel_size">
        <Carousel autoPlay interval={10000} infiniteLoop showStatus={false}>
          {carousel.map((slide) => (
            <NavLink to="/Evenements">
              <div
                id={slide.titletrue}
                key={slide.title}
                onClick={(e) => handleClickCoeur(e)}
                onKeyDown={(e) => handleClickCoeur(e)}
                role="presentation"
              >
                <img src={slide.image} id={slide.titletrue} alt="" />
                <div className="overlay" id={slide.titletrue}>
                  <h2 className="overlay_title" id={slide.titletrue}>
                    {slide.title}
                  </h2>
                </div>
              </div>
            </NavLink>
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

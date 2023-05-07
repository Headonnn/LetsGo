/* eslint-disable react/no-unknown-property */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";
import "../index.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";
import festival from "../assets/images/evenements.jpg";
import nature from "../assets/images/nature.jpg";
import sport from "../assets/images/sport.jpg";
import concert from "../assets/images/concert.jpg";
import cinema from "../assets/images/cinema1.jpg";

function CarouselCategories({ setCateg }) {
  const handleClickCategories = (e) => {
    setCateg(e.target.id);
  };

  const carousel = [
    {
      title: "Festival",
      titletrue: "Festival",
      image: festival,
    },
    {
      title: "Plein Air",
      titletrue: "Sortie nature / environnement",
      image: nature,
    },
    {
      title: "Sport",
      titletrue: "Manifestation sportive",
      image: sport,
    },
    {
      title: "Concert",
      titletrue: "Concert",
      image: concert,
    },
    {
      title: "Cinéma",
      titletrue: "Cinéma",
      image: cinema,
    },
  ];

  return (
    <>
      <div className="categories_title">Catégories</div>
      <div className="carousel_size">
        <Carousel autoPlay interval={10000} infiniteLoop showStatus={false}>
          {carousel.map((slide) => (
            <NavLink to="/Evenements">
              <div
                id={slide.titletrue}
                key={slide.title}
                onClick={(e) => handleClickCategories(e)}
                onKeyDown={(e) => handleClickCategories(e)}
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

export default CarouselCategories;

CarouselCategories.propTypes = {
  setCateg: PropTypes.string.isRequired,
};

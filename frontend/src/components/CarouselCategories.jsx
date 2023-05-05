import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";
import "../style/_carouselcategories.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";

function CarouselCategories({ setCateg }) {
  const handleClickCateg = (e) => {
    setCateg(e.target.key);
  };
  const carousel = [
    {
      id: 1,
      title: "Festival",
      image: "./src/assets/images/evenements.jpg",
    },
    {
      id: 2,
      title: "Plein Air",
      image: "./src/assets/images/nature.jpg",
    },
    {
      id: 3,
      title: "Sport",
      image: "./src/assets/images/sport.jpg",
    },
    {
      id: 4,
      title: "Concert",
      image: "./src/assets/images/concert.jpg",
    },
    {
      id: 5,
      title: "Cinéma",
      image: "./src/assets/images/cinema1.jpg",
    },
  ];

  return (
    <>
      <div className="categories_title">Catégories</div>
      <div className="carousel_size">
        <Carousel autoPlay interval={10000} infiniteLoop showStatus={false}>
          {carousel.map((slide) => (
            <>
              <div
                key={slide.title}
                onClick={(e) => handleClickCateg(e)}
                onKeyDown={(e) => handleClickCateg(e)}
                role="presentation"
              />
              <img src={slide.image} alt="" />
              <div className="overlay">
                <NavLink to="/Evenements">
                  <h2 className="overlay_title">{slide.title}</h2>
                </NavLink>
              </div>
            </>
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

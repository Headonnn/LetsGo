import React from "react";
import "../style/_categories.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";

function Categories() {
  // const handleClickCateg = (e) => {
  //   setCateg(e.target.value);
  // };
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
                // onClick={() => handleClickCateg}
              />
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

export default Categories;

// eslint-disable-next-line react/no-typos
Categories.PropTypes = {
  setCateg: PropTypes.string.isRequired,
};

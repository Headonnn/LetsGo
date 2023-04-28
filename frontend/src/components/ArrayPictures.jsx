import React from "react";
import PropTypes from "prop-types";

function ArrayPictures({ title, id, url }) {
  return <img className="CardImg" id={id} src={url} alt={title} />;
}

export default ArrayPictures;

ArrayPictures.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

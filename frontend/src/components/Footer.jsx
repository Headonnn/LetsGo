import React from "react";
import "../style/_footer.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://www.facebook.com">
          <FaFacebookSquare className="social" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagramSquare className="social" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitterSquare className="social" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

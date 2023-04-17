import React from "react";
import "../style/_nav.scss";
import { SlMagnifier } from "react-icons/sl";

function Nav() {
  return (
    <div className="NavBar">
      <div className="list">
        <ul>
          <li> Catégories </li>
          <li> Date </li>
          <li> Lieu </li>
          <li> Divers </li>
          <SlMagnifier />
        </ul>
      </div>
    </div>
  );
}

export default Nav;

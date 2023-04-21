import React, { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineEuroCircle,
  AiOutlineCalendar,
  AiOutlineMenu,
} from "react-icons/ai";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <nav className="sidebar" style={{ width: isOpen ? "200px" : "50px" }}>
        <div className="top_section">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            {" "}
            Logo?{" "}
          </h1>
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            <AiOutlineMenu onClick={toggle} />
          </div>
        </div>
        <div className="links">
          <div id="icon">
            <AiOutlineAppstore />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              {" "}
              Catégories{" "}
            </p>
          </div>
          <br />
          <div id="icon">
            <AiOutlineEuroCircle />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              {" "}
              Tarif{" "}
            </p>
          </div>
          <br />
          <div id="icon">
            <AiOutlineCalendar />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              {" "}
              Calendrier{" "}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;

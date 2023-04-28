import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AiOutlineAppstore,
  AiOutlineEuroCircle,
  AiOutlineCalendar,
  AiOutlineMenu,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import MultiRangeSlider from "multi-range-slider-react";
import TarifGratuit from "./TarifGratuit";
import Categ from "./Categ";
import FiltreDate from "./FiltreDate";
import Dept from "./Dept";

function Sidebar({
  setDpt,

  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  free,
  setFree,
  api,
  categ,
  setCateg,
  calend,
  setCalend,
  dateEvMin,
  dateEvMax,
  setDateEvMin,
  setDateEvMax,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <div className="container">
      <nav className="sidebar" style={{ width: isOpen ? "400px" : "75px" }}>
        <div className="top_section">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            Let's go?
          </h1>
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            <AiOutlineMenu onClick={toggle} />
          </div>
        </div>
        <div className="links">
          <div id="icon">
            <AiOutlineAppstore />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              Catégories
            </p>
          </div>
          {api && <Categ donnees={api} setCateg={setCateg} categ={categ} />}

          <br />

          <div id="icon">
            <AiOutlineEuroCircle />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              Tarif
            </p>
          </div>
          <TarifGratuit
            setFree={setFree}
            free={free}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
          />

          {free !== "Gratuit" && (
            <MultiRangeSlider
              min={0}
              max={300}
              step={5}
              label
              ruler={false}
              style={{
                border: "none",
                boxShadow: "none",
                padding: "15px 10px",
              }}
              minValue={minValue}
              maxValue={maxValue}
              barInnerColor="#4fa095"
              onInput={(e) => {
                handleInput(e);
              }}
            />
          )}

          <br />

          <div id="icon">
            <AiOutlineCalendar />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              Calendrier
            </p>
          </div>
          {api && (
            <FiltreDate
              calend={calend}
              setCalend={setCalend}
              dateEvMin={dateEvMin}
              dateEvMax={dateEvMax}
              setDateEvMin={setDateEvMin}
              setDateEvMax={setDateEvMax}
            />
          )}

          <br />

          <div id="icon">
            <FiMapPin />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              C'est où ?
            </p>
          </div>
          {api && <Dept donnees={api} setDpt={setDpt} />}

          <br />
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  api: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  calend: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setCalend: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setCateg: PropTypes.string.isRequired,
  setDpt: PropTypes.string.isRequired,
  minValue: PropTypes.string.isRequired,
  setMinValue: PropTypes.string.isRequired,
  maxValue: PropTypes.string.isRequired,
  setMaxValue: PropTypes.string.isRequired,
  free: PropTypes.string.isRequired,
  setFree: PropTypes.string.isRequired,
  categ: PropTypes.string.isRequired,
  dateEvMin: PropTypes.string.isRequired,
  dateEvMax: PropTypes.string.isRequired,
  setDateEvMin: PropTypes.string.isRequired,
  setDateEvMax: PropTypes.string.isRequired,
};

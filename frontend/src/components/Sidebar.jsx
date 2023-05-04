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
import FavorisFilter from "./FavorisFilter";

function Sidebar({
  setDept,
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
  favoritesFilter,
  setFavoritesFilter,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <div className="container">
      <nav className="sidebar" style={{ width: isOpen ? "400px" : "55px" }}>
        <div className="links">
          <div
            className="bars"
            style={{ marginLeft: isOpen ? "175px" : "0px" }}
          >
            <AiOutlineMenu onClick={toggle} />
          </div>

          <br />

          <div>
            <AiOutlineAppstore
              style={{ display: isOpen ? "none" : "block" }}
              id="icon"
            />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              Catégories
            </p>
          </div>
          <span style={{ display: isOpen ? "block" : "none" }}>
            {api && <Categ donnees={api} setCateg={setCateg} categ={categ} />}{" "}
          </span>

          <br />

          <div>
            <AiOutlineEuroCircle
              style={{ display: isOpen ? "none" : "block" }}
              id="icon"
            />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              Tarif
            </p>
          </div>

          <span style={{ display: isOpen ? "block" : "none" }}>
            <FavorisFilter
              favoritesFilter={favoritesFilter}
              setFavoritesFilter={setFavoritesFilter}
            />
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
          </span>

          <br />

          <div>
            <AiOutlineCalendar
              style={{ display: isOpen ? "none" : "block" }}
              id="icon"
            />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              Calendrier
            </p>
          </div>
          <span style={{ display: isOpen ? "block" : "none" }}>
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
          </span>

          <br />

          <div>
            <FiMapPin
              style={{ display: isOpen ? "none" : "block" }}
              id="icon"
            />
            <p style={{ display: isOpen ? "block" : "none" }} id="text">
              C'est où ?
            </p>
          </div>
          <div className="dept">
            <span
              className="deptSpan"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {api && <Dept donnees={api} setDept={setDept} />}
            </span>
          </div>

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
  setDept: PropTypes.string.isRequired,
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
  favoritesFilter: PropTypes.bool.isRequired,
  setFavoritesFilter: PropTypes.bool.isRequired,
};

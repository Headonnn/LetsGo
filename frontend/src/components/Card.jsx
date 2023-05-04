import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineHeart, AiFillCalendar, AiFillHome } from "react-icons/ai";
import {
  MdPlace,
  MdCategory,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { TbCurrencyEuroOff } from "react-icons/tb";
import { IoMdPricetag } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import arrayOfPictures from "./services/utils";
import ArrayPictures from "./ArrayPictures";

function Card({
  id,
  event,
  category,
  price,
  eventPrice,
  adress,
  departement,
  date,
  favorites,
  setFavorites,
}) {
  const [moreInfos, setMoreInfos] = useState(false);
  const [newRender, setNewRender] = useState(false);
  const handleClickFavorite = () => {
    if (favorites.indexOf(id) === -1) {
      const newFavoris = favorites;

      newFavoris.push(id);

      setFavorites(newFavoris);

      setNewRender(!newRender);
    } else {
      const deleteFavoris = favorites;
      deleteFavoris.splice(
        deleteFavoris.findIndex((e) => e === id),
        1
      );
      setFavorites(deleteFavoris);
      setNewRender(!newRender);
    }
  };

  const handleMoreInfos = () => setMoreInfos(!moreInfos);

  const handleDateCard = (str) => {
    let dates = [];
    dates = str
      .match(/(\d+\/\d+\/\d+)\|\|/g, "")
      .map((e) => e.replace(/\|/g, ""));

    dates = dates.map((e) => {
      const tab = e.split("");
      tab.splice(6, 0, tab[0]);
      tab.splice(7, 0, tab[1]);
      tab.splice(8, 0, tab[2]);
      tab.shift();
      tab.shift();
      tab.shift();
      return tab.join("");
    });

    dates = dates.map((e) => new Date(e));

    dates = dates.filter((e) => e - new Date() > 0);
    if (dates.length > 0) {
      dates = dates.sort((a, b) => a - b);

      return dates[0].toString();
    }
    return "Aucune info";
  };
  const beauPrix = (str) => {
    if (str === undefined) {
      return "Aucune information";
    }
    const p = str.replace(/\|/g, " ");
    return p;
  };
  const belleDate = (str) => {
    if (str === "Aucune info") {
      return "Aucune info";
    }
    const d = new Date(str);

    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  return (
    <div className="Card">
      {arrayOfPictures.map((picture) =>
        picture.title === category ? (
          <ArrayPictures
            title={picture.title}
            url={picture.url}
            id={picture.id}
            key={picture.id}
          />
        ) : null
      )}

      <div className="DivTextCard">
        <p className="CardEvent">
          {event
            ? event.charAt(0).toUpperCase() + event.slice(1).toLowerCase()
            : "Aucune information"}{" "}
        </p>
        <div id="favorite">
          <button type="button" onClick={handleClickFavorite}>
            {favorites.indexOf(id) === -1 ? (
              <AiOutlineHeart size={23} />
            ) : (
              <FcLike size={23} />
            )}
          </button>
        </div>
        <p>
          <MdCategory /> : {category || "Aucune information"}{" "}
        </p>
        <p className="CardDate">
          <AiFillCalendar /> : {belleDate(handleDateCard(date))}
        </p>
        <div className="card-details">
          <button
            type="button"
            id="detailsArrow"
            onClick={handleMoreInfos}
            className="card-details-button"
          >
            {" "}
            {moreInfos ? (
              <MdExpandLess size={23} />
            ) : (
              <MdExpandMore size={23} />
            )}
          </button>
        </div>
        {moreInfos && (
          <>
            <p>
              <TbCurrencyEuroOff /> : {beauPrix(price) || "Aucune information"}{" "}
            </p>
            <p>
              <IoMdPricetag /> : {eventPrice || "Aucune information"}{" "}
            </p>
            <p>
              <AiFillHome /> : {departement || "Aucune information"}{" "}
            </p>
            <p>
              <MdPlace /> : {adress || "Aucune information"}{" "}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  event: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  eventPrice: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  departement: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  favorites: PropTypes.string.isRequired,
  setFavorites: PropTypes.string.isRequired,
};

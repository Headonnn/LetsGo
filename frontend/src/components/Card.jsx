import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillCalendar, AiFillHome } from "react-icons/ai";
import {
  MdPlace,
  MdEuroSymbol,
  MdCategory,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { FcLike } from "react-icons/fc";
import arrayOfPictures from "./services/utils";
import ArrayPictures from "./ArrayPictures";

function Card({
  event,
  category,
  price,
  eventPrice,
  payment,
  adress,
  departement,
  date,
  isFavorite,
  setIsFavorite,
  moreInfos,
  setMoreInfos,
}) {
  const handleClickFavorite = () => setIsFavorite(false);
  const handleClickNotFavorite = () => setIsFavorite(true);

  function handleMoreInfos() {
    setMoreInfos(!moreInfos);
    console.warn("hello");
  }

  return (
    <div className="Card">
      {arrayOfPictures.map((picture) =>
        picture.title === category ? (
          <ArrayPictures
            title={picture.title}
            url={picture.url}
            id={picture.id}
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
          <button
            type="button"
            onClick={isFavorite ? handleClickFavorite : handleClickNotFavorite}
          >
            {isFavorite ? <FcLike size={23} /> : <AiOutlineHeart size={23} />}
          </button>
        </div>
        <p>
          <MdCategory /> : {category || "Aucune information"}{" "}
        </p>
        <p className="CardDate">
          <AiFillCalendar /> : {date || "Aucune information"}
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
            <p>Gratuit : {price || "Aucune information"}</p>
            <p>
              <MdEuroSymbol /> : {eventPrice || "Aucune information"}{" "}
            </p>
            <p>Payement : {payment || "Aucune information"}</p>
            <p>
              <MdPlace /> : {adress || "Aucune information"}{" "}
            </p>
            <p>
              <AiFillHome /> : {departement || "Aucune information"}{" "}
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
  payment: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  departement: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isFavorite: PropTypes.string.isRequired,
  setIsFavorite: PropTypes.string.isRequired,
  moreInfos: PropTypes.string.isRequired,
  setMoreInfos: PropTypes.string.isRequired,
};

import React from "react";
import PropTypes from "prop-types";

function Card({
  event,
  category,
  price,
  eventPrice,
  payment,
  adress,
  departement,
  date,
}) {
  return (
    <div className="Card">
      <p>Evénement : {event} </p>
      <p>Catégorie : {category} </p>
      <p>Gratuit : {price} </p>
      {/* //FIXME: afficher méthode de paiement seulement si gratuit = non */}
      <p>Prix : {eventPrice} </p>
      <p>Payement : {payment} </p>
      <p>Adresse : {adress} </p>
      <p>Département : {departement} </p>
      <p>Date : {date} </p>
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
};

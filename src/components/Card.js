import React from "react";
import "../css/card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="" className="card__image" />
      <div className="card__info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h2>{price}</h2>
      </div>
    </div>
  );
}

export default Card;

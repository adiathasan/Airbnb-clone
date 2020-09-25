import React from "react";
import { Link } from "react-router-dom";
import "../css/card.css";

function Card({ src, title, description, price }) {
  return (
    <Link to="/search" className="card">
      <img src={src} alt="" className="card__image" />
      <div className="card__info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h2>{price}</h2>
      </div>
    </Link>
  );
}

export default Card;

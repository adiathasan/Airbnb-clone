import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Modal from "./Modal";

function SearchResult({
  id,
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const { user } = useAuth();
  const history = useHistory();
  return (
    <div
      className="searchResult"
      onClick={() => {
        if (user) {
          history.push(`/booking/${id}/${title}`);
        } else {
          alert("please Login First!");
        }
      }}
    >
      <img src={img} alt="" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <i
              className="far fa-star"
              style={{ color: "red", marginRight: ".1rem" }}
            ></i>
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
      <i
        className="far fa-heart"
        style={{ color: "red", padding: ".6rem" }}
      ></i>
    </div>
  );
}
export default SearchResult;

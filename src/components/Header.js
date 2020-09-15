import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://cdn.worldvectorlogo.com/logos/airbnb.svg"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="header__containerSearch">
        <input type="text" className="header__searchInput" />
        <i className="fas fa-search header__searchLogo"></i>
      </div>
      <div className="header__containerRight">
        <p>Become a host</p>
        <div className="header__rightLogo">
          <i className="fas fa-globe header__globe"></i>
          <i className="fas fa-chevron-down"></i>
        </div>
        <i className="fas fa-user-ninja"></i>
      </div>
    </div>
  );
}

export default Header;

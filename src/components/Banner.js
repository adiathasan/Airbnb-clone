import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../css/banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Go Near</h1>
        <h4>Explore unique destinations near you.</h4>
        <Link
          to="/search"
          style={{
            textDecoration: "none",
          }}
          className="h"
        >
          <h3
            style={{
              color: " #fa3858",
              transition: "ease-in .3s",
              textDecoration: "none",
            }}
          >
            <Button>Explore nearby {">"} </Button>
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Banner;

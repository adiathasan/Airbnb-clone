import React, { useState } from "react";
import "../css/header.css";
import { Link, useHistory } from "react-router-dom";
import { Avatar, Button } from "@material-ui/core";
import firestore, { auth, authProvider, timeStamp } from "../config/firebase";
import useAuth from "../hooks/useAuth";

function Header() {
  const { user } = useAuth();
  const history = useHistory();
  const [input, setinput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("search");
  };

  const handleSignOut = () => {
    auth.signOut();
  };
  const handleSignUp = () => {
    auth.signInWithPopup(authProvider).then((data) => {
      firestore.collection("users").doc(data.user.uid).set({
        name: data.user.displayName,
        url: data.user.photoURL,
        timeStamp: timeStamp(),
        id: data.user.uid,
        email: data.user.email,
        image: data.user.photoURL,
        phone: data.user.phoneNumber,
      });
    });
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://cdn.worldvectorlogo.com/logos/airbnb.svg"
          alt=""
          className="header__logo"
        />
      </Link>

      <form className="header__containerSearch" onSubmit={handleSubmit}>
        <input
          type="text"
          className="header__searchInput"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <i
          className="fas fa-search header__searchLogo"
          onClick={handleSubmit}
        ></i>
      </form>
      <div className="header__containerRight">
        <p>
          {user ? (
            <Button onClick={handleSignOut}>Sign-Out</Button>
          ) : (
            <Button onClick={handleSignUp}>Sign-Up</Button>
          )}
        </p>
        <div className="header__rightLogo">
          <i className="fas fa-globe header__globe"></i>
          <i className="fas fa-chevron-down"></i>
        </div>
        {user ? (
          <Link to={"/dashboard/" + user.id}>
            <Avatar className="header__containerRightAvatar" src={user.url} />
          </Link>
        ) : (
          <Avatar className="header__containerRightAvatar" />
        )}
      </div>
    </div>
  );
}

export default Header;

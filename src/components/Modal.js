import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import firestore from "../config/firebase";
import "../css/modal.css";
import useAuth from "../hooks/useAuth";

function Modal() {
  const { user } = useAuth();
  const history = useHistory();
  const { modal_id, title } = useParams();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const handleBooking = (e) => {
    e.preventDefault();
    if (phone !== "" && name !== "") {
      firestore
        .collection("users")
        .doc(user.id)
        .collection("bookings")
        .add({
          booked_by: name,
          phone,
          booking_spot: title,
          booking_spot_id: modal_id,
        })
        .then((data) => {
          history.push("/dashboard/" + user.id);
        });
    }
  };

  return (
    <div className="search__modal">
      <div className="modal">
        <h4>{title}</h4>
        <form className="modal__form" onSubmit={handleBooking}>
          <input
            type="number"
            min="0"
            minLength="11"
            maxLength="11"
            placeholder="phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="booking name by"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit">Book Hotel</Button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

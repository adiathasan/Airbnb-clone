import React, { useEffect, useState } from "react";
import firestore from "../config/firebase";
import "../css/dashboard.css";
import useAuth from "../hooks/useAuth";
import { useParams } from "react-router-dom";

function Dashboard() {
  const [bookings, setBookings] = useState(null);
  const { id } = useParams();
  const { user } = useAuth();
  const handleBooking = (booking_id) => {
    firestore
      .collection("users")
      .doc(id)
      .collection("bookings")
      .doc(booking_id)
      .delete();
  };
  useEffect(() => {
    firestore
      .collection("users")
      .doc(id)
      .collection("bookings")
      .onSnapshot((snap) => {
        const fetchBookings = async () => {
          const { docs } = await snap;
          setBookings(docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        fetchBookings();
      });
  }, []);
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="dashboard__left">
        <img src={user?.url} alt="" />
      </div>
      <div className="dashboard__right">
        <h4>
          Name: <span>{user?.name}</span>
        </h4>
        <h4>
          email: <span>{user?.email}</span>
        </h4>
        <h4>
          phone: <span>{user?.phone ? user?.phone : "+880........."}</span>
        </h4>
      </div>
      {bookings?.length ? (
        <div className="dashboard__bookings">
          <h3>Bookings</h3>
          <div className="dashboard__bookingsInfo">
            {bookings?.map((booking, i) => (
              <div key={booking.id} className="dashboard__bookingsInfoRight">
                <h1>{i + 1}</h1>
                <div className="dashboard__bookingsInfoRightText">
                  <h4>
                    Booked by: <span>{booking.booked_by}</span>
                  </h4>
                  <h4>
                    Booking spot: <span>{booking?.booking_spot}</span>
                  </h4>
                  <h4>
                    Booking phone Number: <span>{booking?.phone}</span>
                  </h4>
                  <h5 onClick={() => handleBooking(booking.id)}>❌</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;

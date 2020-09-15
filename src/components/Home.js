import React, { useState } from "react";
import Banner from "./Banner";
import SearchOption from "./SearchOption";
import "../css/search.css";
import "../css/home.css";
import { motion } from "framer-motion";
import Card from "./Card";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="home" style={{ position: "relative" }}>
      {
        <motion.div
          layout
          transition={{ delay: 0.6 }}
          div
          className="home__datePeaker"
        >
          {showSearch && <SearchOption />}
        </motion.div>
      }
      <div className="banner__searchSpace">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchBtn"
        >
          {!showSearch ? "Search on Dates" : "Close Picker"}
        </button>
      </div>
      <Banner />
      <div className="home__cardsRow">
        <Card
          src={
            "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
          }
          title={"Unique Stays"}
          description={"Spaces that are more than just a place to sleep."}
        />
        <Card
          src={
            "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=320"
          }
          title={"Online Experiences"}
          description={
            "Unique activities we can do together, led by a world of hosts."
          }
        />
        <Card
          src={
            "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320"
          }
          title={"Entire homes"}
          description={
            "Comfortable private places, with room for friends or family."
          }
        />
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;

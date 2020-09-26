import React from "react";
import "../css/searchPage.css";
import useRoom from "../hooks/useRoom";
import SearchResult from "./SearchResult";
function SearchPage() {
  const { rooms } = useRoom();
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 days . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <button>Cancellation Flexibility</button>
        <button>Type of place</button>
        <button>Price</button>
        <button>Rooms and beds</button>
        <button>More filters</button>
        {rooms?.map((room) => (
          <SearchResult
            key={room.id}
            id={room.id}
            img={room.img}
            location={room.location}
            title={room.title}
            description={room.description}
            star={room.star}
            price={room.price}
            total={room.total}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;

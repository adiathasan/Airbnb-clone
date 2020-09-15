import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import "../css/search.css";
import { useHistory } from "react-router-dom";

function SearchOption() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  console.log(startDate, endDate);
  return (
    <div className="search">
      <DateRangePicker
        className="search__datePicker"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <div className="search__inputPicker">
        <h2>Number Of guests</h2>
        <input min={0} defaultValue={1} />
        <button
          onClick={() => history.push("/search")}
          className="banner__searchBtn"
        >
          Search Airbnb
        </button>
      </div>
    </div>
  );
}

export default SearchOption;

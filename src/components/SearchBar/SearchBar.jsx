import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.scss";
import TripDetails from "../../pages/TripDetails/TripDetails";

const SearchBar = (props) => {
  const { packages } = props;

  const [search, setSearch] = useState("");
  // const [list, setList] = useState({ packages });

  const handleSearch = (e) => {
    console.log("Handle the change in the query input", e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search input -", handleSubmit);
  
    setSearch();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <BsSearch />
        </button>
        <input
          id="search"
          type="text"
          value={search}
          placeholder="Packages"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBar;

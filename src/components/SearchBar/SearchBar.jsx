import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.scss";

const SearchBar = () => {
  const url = `https://act-travel-project-api.herokuapp.com/tripDetails`;

  const [query, setQuery] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuery(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="search-container">
      <button htmlFor="search">
        <BsSearch />
      </button>
      <input id="search" type="text" placeholder="Packages" />
    </div>
  );
};

export default SearchBar;

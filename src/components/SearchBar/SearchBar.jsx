import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.scss";

const SearchBar = () => {
  // const url = `https://act-travel-project-api.herokuapp.com/tripDetails`;

  const [query, setQuery] = useState([]);

  // const getData = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setQuery(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const handleSubmit = (e, search) => {
    e.preventDefault();
    console.log("Search input -", handleSubmit);
    setQuery(search);
  };

  const handleQuery = (e) => {
    console.log("Handle the change in the query input", e.target.value);
    setQuery({ ...query, [e.target.name]: e.traget.value });
  };

  return (
    <div className="search-container">
      <button htmlFor="search" onSubmit={handleSubmit}>
        <BsSearch />
      </button>
      <input
        id="search"
        type="text"
        placeholder="Packages"
        onChange={handleQuery}
      />
    </div>
  );
};

export default SearchBar;

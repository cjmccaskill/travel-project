import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const [packageName, setPackageName] = useState("");

  const handleChange = (e) => {
    console.log("Handle the change in the search input", e.target.value);
    setPackageName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefualt();
    props.handleSubmit(packageName);
    setPackageName("");
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
          value={packageName}
          placeholder="Search Packages"
          onChange={handleChange}
          className="search-placeholder"
        />
      </form>
    </div>
  );
};

export default SearchBar;

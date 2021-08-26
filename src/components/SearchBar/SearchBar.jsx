import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const [packageName, setPackageName] = useState("");

  const handleChange = (e) => {
    setPackageName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(packageName);
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
          placeholder="Packages"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;

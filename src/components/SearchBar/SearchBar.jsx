import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const [search, setSearch] = useState(props);

  const handleChange = (e) => {
    console.log("Handle the change in the query input", e.target.value);
    setSearch(e.target.value);
  };

  // const displayPackages = pkgs.filter((pkg) => {
  //   return pkg.packageName.toLowerCase().includes(search.toLowerCase())
  // })

  
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
            onChange={handleChange}
          />
        </form>
      </div>
  );
};

export default SearchBar;

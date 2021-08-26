import React, { useState } from "react";
import "./Home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedPackages from "../../components/FeaturedPackages/FeaturedPackages";
import FeaturedAgents from "../../components/FeaturedAgents/FeaturedAgents";

const Home = (props) => {
  // store state for packages
  const [location, setLocation] = useState("");

  const handleSubmit = (packageLocation) => {
    setLocation(packageLocation);
  };

  return (
    <div className="home-container">
      <SearchBar handleSubmit={handleSubmit} packages={props.packages} />
      <FeaturedPackages location={location} packages={props.packages} />
      <FeaturedAgents agents={props.agents} />
    </div>
  );
};

export default Home;

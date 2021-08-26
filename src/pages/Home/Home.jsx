import React from "react";
import "./Home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedPackages from "../../components/FeaturedPackages/FeaturedPackages";
import FeaturedAgents from "../../components/FeaturedAgents/FeaturedAgents";

const Home = (props) => {
  return (
    <div className="home-container">
      <SearchBar packages={props.packages} />
      <FeaturedPackages packages={props.packages} />
      <FeaturedAgents agents={props.agents} />
    </div>
  );
};

export default Home;

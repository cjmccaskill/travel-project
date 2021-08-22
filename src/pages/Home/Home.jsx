import React from "react";
import "./Home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Packages from "../../components/Packages/Packages";
import Agents from "../../components/Agents/Agents";

const Home = (props) => {
  console.log("Home props", props)
  return (
    <div className="home-container">
      <SearchBar />
      <Packages packages={props.packages} />
      <Agents agents={props.agents} />
    </div>
  );
};

export default Home;

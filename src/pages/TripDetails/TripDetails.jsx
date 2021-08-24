import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPaperPlane, FaDotCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { RiBookmark2Line } from "react-icons/ri";
import "./TripDetails.scss";

const TripDetails = (props) => {
  const url = `https://act-travel-project-api.herokuapp.com/agent/${props.match.params.id}`;

  const [pkg, setPkg] = useState(props.id);
  const [agent, setAgent] = useState({});

  const getPkgs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPkg(data);
  };

  useEffect(() => {
    getPkgs();
  }, []);

  const getAgents = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAgent(data);
  };
  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div className="trip-pkg-card" key={""}>
      <img src={pkg.img} alt={pkg.name} className="pkg-img" />
      <RiBookmark2Line className="bookmark" />
      <div className="pkg-info">
        <h1>{pkg.name}</h1>
        <AiFillStar className="star">4.9 (312)</AiFillStar>
        <a href={agent.email}>
          <FaPaperPlane />
        </a>
      </div>
      <Link to="/agent" className="agent-info">
        <div>{agent.img}</div>
        <div>
          <div>Hosted by</div>
          <div>{agent.name}</div>
        </div>
      </Link>
      <div className="included">
        <div className="transport">
          <FaDotCircle>{pkg.vehicle}</FaDotCircle>
          Transport
        </div>
        <div className="hotel">
          <FaDotCircle>{pkg.vehicle}</FaDotCircle>
          Hotel
        </div>
        <div className="img-arr">{pkg.imgArr}</div>
        <img src="" />
      </div>
      <div className="price">
        <div className="cost">
          <p className="tc">Total Cost</p>
          <h1>${pkg.payment}</h1>
          <p>/Person</p>
        </div>
        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
};

export default TripDetails;

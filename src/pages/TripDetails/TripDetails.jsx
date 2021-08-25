import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPaperPlane, FaDotCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { RiBookmark2Line } from "react-icons/ri";
import "./TripDetails.scss";

const TripDetails = (props) => {
  // call the trip details API
  const [pkg, setPkg] = useState({});

  const getPkgs = async () => {
    const response = await fetch(
      `https://act-travel-project-api.herokuapp.com/tripdetails/${props.match.params.id}`
    );
    const data = await response.json();
    setPkg(data);
  };

  useEffect(() => {
    getPkgs();
  }, []);

  // call the agents API
  // const [agent, setAgent] = useState({});

  // const getAgents = async () => {
  //   const response = await fetch(
  //     `https://act-travel-project-api.herokuapp.com/agent`
  //   );
  //   const data = await response.json();
  //   setAgent(data);
  // };

  // useEffect(() => {
  //   if (!pkg.data) {
  //     getPkgs();
  //   }
  //   if (agent.data) {
  //     getAgents();
  //   }
  // }, []);

  return (
    <div className="trip-pkg-container">
      <div className="trip-pkg-card" key={""}>
        <img src={pkg.img} alt={pkg.packageName} className="trip-pkg-img" />
        <div className="trip-pkg-info">
          <RiBookmark2Line className="bookmark" />
          <h1>{pkg.packageName}</h1>
          <AiFillStar className="star">4.9</AiFillStar>
          {/* <a href={pkg.packages.agentInfo.email}>
            <FaPaperPlane />
          </a> */}
        </div>
        <Link to="/agent/:id" className="trip-agent-info">
          {/* <div>{agentInfo.img}</div> */}
          <div>
            <div>Hosted by</div>
            {/* <div>{pkg.packages.agentInfo.name}</div> */}
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
          <div className="trip-photos-arr">{pkg.photos}</div>
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
    </div>
  );
};

export default TripDetails;

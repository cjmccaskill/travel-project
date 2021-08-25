import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPaperPlane, FaDotCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { RiBookmark2Line } from "react-icons/ri";
import "./TripDetails.scss";

const TripDetails = (props) => {
  const url = `https://act-travel-project-api.herokuapp.com/tripdetails/${props.match.params.id}`;

  // call the trip details API
  const [pkg, setPkg] = useState({});

  const getPkgs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPkg(data);
  };

  useEffect(() => {
    getPkgs();
    // .then((data) => setPkg(data))
  }, []);

  const loadedPkg = () => {
    return (
      <div className="trip-pkg-container">
        <div className="trip-pkg-card" key={""}>
          <img src={pkg.img} alt={pkg.packageName} className="trip-pkg-img" />
          <div className="trip-pkg-info">
            <RiBookmark2Line className="bookmark" />
            <h1>{pkg.packageName}</h1>
            <AiFillStar className="star">4.9</AiFillStar>
            <a href={pkg.agentInfo?.email}>
              <FaPaperPlane />
            </a>
          </div>
          <Link to="/agent/:id" className="trip-agent-info">
            <img src={pkg.agentInfo?.img} alt="" />
            <div>
              <div>Hosted by</div>
              <div>{pkg.agentInfo?.name}</div>
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
  const loading = () => {
    return <h1>Not Available</h1>;
  };

  return pkg ? loadedPkg() : loading();
};

export default TripDetails;

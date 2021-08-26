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
  }, []);

  const loadedPkg = () => {
    return (
      <div className="trip-pkg-container">
        <img src={pkg.img} alt={pkg.packageName} className="trip-pkg-img" />
        <div className="trip-pkg-card" key={""}>
          <RiBookmark2Line className="td-bookmark" />
          <div className="trip-pkg-info">
            <h1>{pkg.packageName}</h1>
            <div className="rating">
              <AiFillStar className="td-star" />
              <p>4.9</p>
            </div>
            <div className="td-contact">
              <a href={pkg.agentInfo?.email}>
                <FaPaperPlane className="plane-one" />
              </a>
              <p>{pkg.packageName}</p>
            </div>
          </div>
          <div className="td-plan">
            <h2>Trip Plan</h2>
            {pkg.description}
          </div>
          <Link to="/agent/:id" className="trip-agent-info">
            <img src={pkg.agentInfo?.img} alt="" />
            <div className="trip-agent-text">
              <h3>Hosted by</h3>
              <h3>{pkg.agentInfo?.name}</h3>
            </div>
            <a href={pkg.agentInfo?.email} className="email-agent">
              <FaPaperPlane className="plane-two" />
            </a>
          </Link>
          <div className="included">
            <h2>What's Included?</h2>
            <div className="transport">
              <h4>Transport</h4>
              <FaDotCircle className="dot one" />
              {pkg.vehicle}
            </div>
            <div className="hotel">
              <h4>Hotel</h4>
              <FaDotCircle className="dot two" />
              {pkg.hotel}
            </div>
            <div className="trip-photos-arr">
              <div className="one">
                <img src={pkg.photos?.[0]} />
              </div>
              <div className="two">
                <img src={pkg.photos?.[1]} />
              </div>
              <div className="three">
                <img src={pkg.photos?.[2]} />
              </div>
            </div>
          </div>
          <div className="price">
            <div className="cost">
              <p className="tc">Total Cost</p>
              <div className="amount">
                <h1>${pkg.payment}</h1>
                <p>/Person</p>
              </div>
            </div>
            <button className="book-now">
              <h4>Book Now</h4>
            </button>
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

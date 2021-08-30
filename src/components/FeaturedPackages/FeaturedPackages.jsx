import React from "react";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { RiBookmark2Line } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import "./FeaturedPackages.scss";

const FeaturedPackages = (props) => {
  const { packages } = props;

  const allPackages = () => {
    return packages.map((pkg) => (
      <div className="pkg-card" key={pkg._id}>
        <Link to={`/tripdetails/${pkg._id}`}>
          <img src={pkg.img} alt={pkg.name} className="pkg-img" />
          <div className="bookmark">
            <RiBookmark2Line />
          </div>
          <div className="pkg-name">{pkg.packageName}</div>
        </Link>
        <div className="pkg-details">
          <div className="pkg-location">
            <BiMap className="map-icon" />
            {pkg.location}
          </div>
          <div className="pkg-dates">
            <FaCalendarAlt className="fp-cal-icon" />
            {pkg.dates}
          </div>
        </div>
      </div>
    ));
  };

  const filteredPackages = () => {
    return packages
      .filter((pkg) =>
        pkg.location.toLowerCase().includes(props.location.toLowerCase())
      )
      .map((pkg) => (
        <Link to={`/tripdetails/${pkg._id}`} className="pkg-card" key={pkg._id}>
          <img src={pkg.img} alt={pkg.name} className="pkg-img" />
          <div className="bookmark">
            <RiBookmark2Line />
          </div>
          <h3 className="pkg-name">{pkg.packageName}</h3>
          <div className="pkg-details">
            <a href={pkg.location} className="pkg-location">
              <BiMap className="map-icon" />
              {pkg.location}
            </a>
            <div className="pkg-dates">
              <FaCalendarAlt className="fp-cal-icon" />
              {pkg.dates}
            </div>
          </div>
        </Link>
      ));
  };

  return (
    <>
      <div className="pkgs-header">
        <h1>Packages</h1>
        <Link to="/tripdetails" className="see-pkgs">
          See All
        </Link>
      </div>
      <div className="pkgs-container">
        {props.location === "" ? allPackages() : filteredPackages()}
      </div>
    </>
  );
};

export default FeaturedPackages;

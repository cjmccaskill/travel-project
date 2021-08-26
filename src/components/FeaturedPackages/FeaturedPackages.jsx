import React from "react";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { RiBookmark2Line } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import "./FeaturedPackages.scss";

const FeaturedPackages = (props) => {
  const { packages } = props;
  return (
    <>
      <div className="pkgs-header">
        <h1>Packages</h1>
        <Link to="/tripdetails" className="see-pkgs">
          See All
        </Link>
      </div>
      <div className="pkgs-container">
        {packages.map((pkg) => (
          <div className="pkg-card" key={pkg._id}>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedPackages;

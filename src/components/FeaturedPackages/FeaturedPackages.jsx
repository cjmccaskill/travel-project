import React from "react";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { RiBookmark2Line } from "react-icons/ri";
import "./FeaturedPackages.scss";

const FeaturedPackages = (props) => {
  const { packages } = props;
  return (
    <>
      <div className="pkgs-header">
        <h1>Packages</h1>
        <Link to="/tripDetails" className="see-pkgs">
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
            <div className="pkg-name">{pkg.packageName}</div>
            <a href={pkg.location} className="pkg-location">
              <BiMap />
              {pkg.location}
            </a>
            <div className="pkg-dates">{pkg.dates}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedPackages;

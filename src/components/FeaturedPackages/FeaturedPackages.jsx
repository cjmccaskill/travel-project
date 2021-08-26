import React from "react";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { RiBookmark2Line } from "react-icons/ri";
import "./FeaturedPackages.scss";

const FeaturedPackages = (props) => {
  const { packages } = props;

  const allPackages = () => {
    return packages.map((pkg) => (
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
    ));
  };

  const filteredPackages = () => {
    return packages
      .filter((pkg) =>
        pkg.location[0].toLowerCase().includes(props.location.toLowerCase())
      )
      .map((pkg) => (
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

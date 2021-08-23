import React from "react";
import { Link } from "react-router-dom";
import "./Packages.scss";

const Packages = (props) => {
  const { packages } = props;
  return (
    <div>
      <h1>Trip Packages</h1>
      <div className="pkgs-container">
        {packages.map((pkg) => (
          <Link
            to={`/tripDetails/${pkg._id}`}
            className="pkg-card"
            key={pkg._id}
          >
            <img src={pkg.img} alt={pkg.name} className="pkg-img" />
            <div className="pkg-info">
              <h1>{pkg.name}</h1>
              <div className="pkg-dates">{pkg.dates}</div>
            </div>
            <div className="price-bubble">
              <h1>$</h1>
              {pkg.payment}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Packages;

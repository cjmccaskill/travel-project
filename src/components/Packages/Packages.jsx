import React from "react";
import { Link } from "react-router-dom";
import "./Packages.scss";

const Packages = (props) => {
  const { packages } = props;
  return (
    <div>
      <h1>Trip Packages</h1>
      <div className="tripdetails-container">
        {packages.map((pkg) => (
          <Link
            to={`/tripDetails/${pkg._id}`}
            className="pkg-tripdetails"
            key={pkg._id}
          >
            <img src={pkg.img} alt={pkg.name} className="pkg-img-tripdetails" />
            <div className="pkg-info-tripdetails">
              <h1>{pkg.packageName}</h1>
              <div className="pkg-dates-tripdetails">{pkg.dates}</div>
            </div>
            <div className="price-tripdetails">
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

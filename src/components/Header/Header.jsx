import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
import { RiArrowLeftFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  // set up useState and set the menu state to closed
  const [menuOpen, setMenuOpen] = useState(false);
  // update state when menu is open (! overrides )
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const hideMenu = () => setMenuOpen(false);

  const navigation = [
    { link: "/", text: "Home" },
    { link: "/tripdetails", text: "Shop Packages" },
    { link: "/agent", text: "Explore Agents" },
    { link: "/user/userprofile", text: "My Account" },
  ];
  return (
    <div className="header">
      <div className="nav-bar">
        {/* need an onClick event in the button to set the state */}
        <button className="menu-button" open={menuOpen} onClick={handleToggle}>
          {menuOpen ? (
            <RiArrowLeftFill className="back-arrow" />
          ) : (
            <CgMenuLeft className="hamburger" />
          )}
        </button>
        <ul className={`menu-links ${menuOpen ? " show-menu" : ""}`}>
          {navigation.map((nav) => (
            <li key={nav.text}>
              <Link
                to={nav.link}
                className="active-link"
                onClick={() => hideMenu()}
                exact="true"
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
        <button className="account-info">
          <Link to="/user/userprofile">
            <BiUserCircle className="account-icon" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;

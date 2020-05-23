import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="page-links">
        <Link to="/settings">Settings</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;

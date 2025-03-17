import React from "react";
import { CDN_LOGO_IMAGE } from "../utils/constants";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="logo">
        <img width={200} src={CDN_LOGO_IMAGE} />
      </div>
      <div className="navItems">
        <ul className="navItems">
          <li>Home</li>
          <li>Services</li>
          <li>About us</li>
          <li>Sevices</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://jkproducts.us/wp-content/uploads/2021/05/jk_logo_white-large@300x.png"
          alt="logo"
        />
      </div>
      <div className="links">
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </div>
  );
};

import React from "react";
import "../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active link" : "link")}>Ankita Budhia</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "active link" : "link")}>SERVICES</NavLink>
        <NavLink to="/work" className={({ isActive }) => (isActive ? "active link" : "link")}>WORK</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active link" : "link")}>ABOUT</NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? "active link" : "link")}>BLOG</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active link button" : "link button")}>LET'S TALK</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import "../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <nav className="big-screen">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active link logo" : "link logo")}>Ankita Budhia</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "active link" : "link")}>SERVICES</NavLink>
        <NavLink to="/work" className={({ isActive }) => (isActive ? "active link" : "link")}>WORK</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active link" : "link")}>ABOUT</NavLink>
        <NavLink to="/testimonial" className={({ isActive }) => (isActive ? "active link" : "link")}>TESTIMONIAL</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active link button" : "link button")}>LET'S TALK!</NavLink>
      </nav>
      <div className="small-screen navbar">
        <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active link logo" : "link logo")}>Ankita Budhia</NavLink>
        </nav>      
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <nav className="big-screen">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active link logo" : "link logo"
          }
        >
          Ankita Budhia
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          PROJECTS
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          EXPERIENCE
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          SKILLS
        </NavLink>


        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          BLOGS
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active link button" : "link button"
          }
        >
          LET'S TALK!
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

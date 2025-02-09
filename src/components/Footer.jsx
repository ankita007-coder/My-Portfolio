import React from "react";
import "../assets/css/Footer.css";
import { Link } from "react-router-dom";
import {
  SlSocialGithub,
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import Marquee from "./Marquee";

const Footer = () => {
  const links = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/services",
      label: "Services",
    },
    {
      url: "/work",
      label: "Work",
    },
    {
      url: "/about",
      label: "About",
    },
    // {
    //   url: "/pricing",
    //   label: "Pricings",
    // },
    {
      url: "/testimonial",
      label: "Testimonial",
    },
    {
      url: "/contact",
      label: "Contact",
    },
  ];
  return (
    <>
     <Marquee/>
        <section className="contact">
      <h2 className="head steps-head">
         Let's make your <br /> <span>website shine</span>
        </h2>
        <p className="one-liner">
        Crafting tailored digital experiences with expertise <br />in MERN, Shopify, Wix, and WordPress.
        </p>
        <Link to="/contact" className="link button">Get in touch!</Link>
      </section>
      <footer>
            <div className="logo-about">
        <h3 className="logo">Ankita Budhia</h3>
        <p>
          {" "}
          Hi, I'm Ankita Budhia – a full-stack MERN developer with expertise in
          React.js , as well as web design and development for Wix, WordPress,
          and Shopify
        </p>
      </div>
      <div className="links">
        <h3>Useful Links</h3>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.url}>
                <Link to={`${link.url}`} className="link">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="connect">
        <h3 className="con-head">GET IN TOUCH!</h3>
        <div className="social-media">
          <div className="icons">
            <SlSocialGithub />
          </div>
          <div className="icons">
            <SlSocialGoogle />
          </div>
          <div className="icons">
            <SlSocialInstagram />
          </div>{" "}
          <div className="icons">
            <SlSocialLinkedin />
          </div>{" "}
          <div className="icons">
            <SlSocialYoutube />
          </div>
        </div>
        </div>
    </footer>
    </>
  );
};

export default Footer;

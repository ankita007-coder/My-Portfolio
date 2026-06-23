import React from "react";
import "../assets/css/Footer.css";
import { Link } from "react-router-dom";
import {
  SlSocialGithub,
  SlSocialGoogle,
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
      url: "/projects",
      label: "Projects",
    },
    {
      url: "/experience",
      label: "Experience",
    },
    {
      url: "/about",
      label: "About",
    },

    {
      url: "/contact",
      label: "Contact",
    },
  ];
  return (
    <>
      <Marquee />
      <section className="contact">
        <h2 className="head steps-head" style={{ fontSize: "3rem" }}>
          Built with curiosity. <br />
          <span> Open to possibilities.</span>
        </h2>

        <p className="one-liner">
          Whether it's frontend engineering, full-stack development, <br />
          or simply geeking out over a cool idea, I'd love to connect.
        </p>

        <Link to="/contact" className="link button">
          Let's Connect →
        </Link>
      </section>
      <footer>
        <div className="logo-about">
          <h3 className="logo">Ankita Budhia</h3>

          <p>
            Software Engineer passionate about building products that blend
            thoughtful engineering with exceptional user experiences. From
            enterprise applications and GenAI workflows to side projects, I love
            creating software that makes an impact.
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
            <a
              href="https://github.com/ankita007-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
              aria-label="GitHub"
            >
              <SlSocialGithub />
            </a>

            <a
              href="mailto:ankitabudhia0302@gmail.com"
              className="icons"
              aria-label="Email"
            >
              <SlSocialGoogle />
            </a>


            <a
              href="https://www.linkedin.com/in/ankita-budhia-7b44861b8"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
              aria-label="LinkedIn"
            >
              <SlSocialLinkedin />
            </a>

            <a
              href="https://www.youtube.com/@codingwithAnkita"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
              aria-label="YouTube"
            >
              <SlSocialYoutube />
            </a>
          </div>
        </div>
      </footer>
      <div className="copyright">
        © {new Date().getFullYear()} Ankita Budhia. Designed & developed with ❤️
        and a healthy amount of console.log().
      </div>
    </>
  );
};

export default Footer;

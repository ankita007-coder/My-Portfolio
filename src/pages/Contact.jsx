import React from "react";
import Wrapper from "../assets/wrappers/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dp from "../assets/images/profile.jpeg";
import {
  SlSocialGithub,
  SlSocialGoogle,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
const Contact = () => {
  const socialLinks = [
    { icon: SlSocialGithub, url: "https://github.com/ankita007-coder" },
    { icon: SlSocialLinkedin, url: "https://www.linkedin.com/in/ankita-budhia-7b44861b8/" },
    { icon: SlSocialYoutube, url: "https://www.youtube.com/@codingwithAnkita" },
    { icon: SlSocialGoogle, url: "mailto:ankitabudhia0302@gmail.com" },
  ];

  return (
    <Wrapper>
      <div className="contact-image">
        <LazyLoadImage src={dp} />
      </div>
      <div className="contact-details">
        <h2>Let's Connect!</h2>
        <p>Reach out via my social profiles:</p>
        <div className="social-media">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="icons">
                <link.icon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;

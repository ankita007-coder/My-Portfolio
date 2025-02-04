import React, { useState } from "react";
import axios from "axios";
import Wrapper from "../assets/wrappers/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dp from "../assets/images/profile.png";
import {
  SlSocialGithub,
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://portfolio-backend-mbhw.onrender.com/send",
        formData
      );
      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Message failed to send.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <Wrapper>
      <div className="contact-image">
        <LazyLoadImage src={dp} />
      </div>
      <div className="contact-details">
        <div className="contact-form">
          <h2>Let's get in touch!</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
          {status && <p>{status}</p>}
        </div>
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
    </Wrapper>
  );
};

export default Contact;

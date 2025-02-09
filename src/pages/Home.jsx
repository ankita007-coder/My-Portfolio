import React, { useEffect } from "react";
import dp from "../assets/images/profile.png";
import "../assets/css/Home.css";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiArrowUpRightBold } from "react-icons/pi";
import AOS from "aos";
import { Timeline } from "../components";
import {
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skills from "./Skills";
import lapy from "../assets/images/laptop.jpg"
import Marquee from "react-fast-marquee";
import chavilogo from "../assets/images/logochavi.png"
import mealmitra from "../assets/images/meal_mitra_logo.png"
import novmii from "../assets/images/novmii.png"
import { services } from "../assets/utils/data";

const Home = () => {

  const logoList = [chavilogo, mealmitra, novmii];
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="home">
      <div>
        <LazyLoadImage
          src={dp}
          alt="profile"
          effect="blur"
          className="my-pic-box"
          width="100%"
        />
      </div>
      <h1 className="head">Web Developer</h1>
      <p className="one-liner">
        Crafting tailored digital experiences with expertise in <br /> MERN,
        Shopify, Wix, and WordPress.
      </p>
      <Link to="/contact" className="link button">HIRE ME!</Link>
      <Skills />
      <div className="link-service">
        <a href="#services" className="link">
          <span className="arrow">
            <FaArrowDown />
          </span>
          <p>MY SERVICES</p>
        </a>
      </div>
      <Marquee   style={{
    background: "#3228186a",
    color: "white",
    padding: "10px",
    margin:"2rem 0 0",
    height: "80px",
    borderTop:"1px solid #c8f90424",
    borderBottom:"1px solid #c8f90424",}}>
        {
          logoList.map((logo)=>{
            return <LazyLoadImage src={logo} effect="blur" className="logo-marquee"/>
          })
        }
      </Marquee>
      <section className="services" id="services" data-aos="fade-up">
        {
          services.map((service,idx)=>{
            return <div>
            <span className="number">0{idx+1}</span>
            <h2>{service.title}</h2>
            <p>
              {service.desc}
            </p>
            <Link to="/services" className="link">
              <span className="arrow-outline">
                <PiArrowUpRightBold />
              </span>{" "}
              About {service.title}
            </Link>
          </div>
          })
        }
      </section>

      <section className="selected-work">
        <div className="work-head">
          <h2>Selected Work</h2>
          <Link to="/work" className="link">
            <span className="arrow-outline">
              <PiArrowUpRightBold />
            </span>
            <p>See all</p>
          </Link>
        </div>

        <div className="works" data-aos="fade-up">
          <div className="image">
            <img src={lapy} alt="" srcset="" />
            <div className="image-text">
              <p>Chavi Design</p>
              <p>Web Dev</p>
            </div>
          </div>
          <div className="image">
            <img src={lapy} alt="" srcset="" />
          </div>
        </div>
        <div></div>
      </section>

      <section className="steps">
        <h4>THE PROCESS</h4>
        <h2 className="head steps-head">
          Your Website <br /> <span>in 5 steps</span>
        </h2>
        <p className="one-liner">
        Our process ensures that we create a website <br /> tailored to your business needs.
        </p>
        <div className="timeline">
          <div className="arrow-outline">
            <FaArrowDown />
          </div>
        </div>
        <Timeline />
      </section>

    
      <section className="about">
        <div></div>
        <div className="about-text">
          <div>
            <h3 className="steps-head">
              A website that leaves <br /> <span>a lasting impression!</span>
            </h3>
          </div>
          <div>
            <p>
              Hi, I'm Ankita Budhia – a full-stack MERN developer with expertise
              in React.js , as well as web design and development for Wix,
              WordPress, and Shopify. I’m passionate about creating dynamic,
              visually appealing, and user-friendly websites. Whether you're
              looking for custom web development or intuitive design, I bring a
              personal touch to every project. Let’s work together to bring your
              ideas to life and create something extraordinary!
            </p>
            <div className="social-icons">
              <div className="icons">
                <SlSocialGoogle />
              </div>
              <div className="icons">
                <SlSocialInstagram />
              </div>{" "}
              <div className="icons">
                <SlSocialLinkedin />
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

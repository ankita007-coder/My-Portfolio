import React, { useEffect } from "react";
import dp from "../assets/images/laptop.jpg";
import "../assets/css/Home.css";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiArrowUpRightBold } from "react-icons/pi";
import AOS from "aos";
import { Timeline } from "../components";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="home">
      <div>
        <img src={dp} alt="" srcset="" />
      </div>
      <h1 className="head">Web Developer</h1>
      <p className="one-liner">
        baadjhewbf wjbf3fj wefbwfb wefh3ufufb whf3ffbb
      </p>

      <div className="link-service">
        <a href="#services" className="link">
          <span className="arrow">
            <FaArrowDown />
          </span>
          <p>MY SERVICES</p>
        </a>
      </div>

      <section className="services" id="services" data-aos="fade-up">
        <div>
          <span className="number">01</span>
          <h2>WEB DEVELOPMENT</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link to="/services" className="link">
            <span className="arrow-outline">
              <PiArrowUpRightBold />
            </span>{" "}
            ABOUT WEB DEVELOPMENT
          </Link>
        </div>
        <div>
          <span className="number">02</span>
          <h2>WEB DEVELOPMENT</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link to="/services" className="link">
            <span className="arrow-outline">
              <PiArrowUpRightBold />
            </span>{" "}
            ABOUT WEB DEVELOPMENT
          </Link>
        </div>
        <div>
          <span className="number">03</span>
          <h2>WEB DEVELOPMENT</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link to="/services" className="link">
            <span className="arrow-outline">
              <PiArrowUpRightBold />
            </span>{" "}
            ABOUT WEB DEVELOPMENT
          </Link>
        </div>
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
            <img src={dp} alt="" srcset="" />
            <div className="image-text">
              <p>Chavi Design</p>
              <p>Web Dev</p>
            </div>
          </div>
          <div className="image">
            <img src={dp} alt="" srcset="" />
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
          baadjhewbf wjbf3fj wefbwfb wefh3ufufb whf3ffbb
        </p>

        <div className="timeline">
            <div className="arrow-outline"><FaArrowDown/></div>
            <Timeline/>
        </div>
      </section>
    </div>
  );
};

export default Home;

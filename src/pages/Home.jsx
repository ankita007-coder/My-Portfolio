import React, { useEffect } from "react";
import dp from "../assets/images/profile.jpeg";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import { PiArrowUpRightBold } from "react-icons/pi";
import AOS from "aos";
import { SingleProject } from "../components";
import {
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skills from "./Skills";
import { projects } from "../assets/utils/projectsData";
import Experience from "./Experience";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home">
      <div class="my-pic">
        <LazyLoadImage
          src={dp}
          alt="profile"
          effect="blur"
          className="my-pic-box"
        width={300}
        />
      </div>
      <h1 className="head">Ankita Budhia</h1>
      <p className="one-liner">
        Building products across the stack—from polished React interfaces to
        AI-powered workflows and distributed systems.
        <br /> I love solving problems where thoughtful engineering meets great
        user experience.
      </p>
      <div className="home-ctas">
        <a
          href="/resume.pdf"
          className="link button"
          style={{ marginRight: "10px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <Link to="/contact" className="link button">
          Let's Talk
        </Link>
      </div>

      <section className="selected-work">
        <div className="work-head">
          <h2>Selected Projects</h2>
          <Link to="/projects" className="link see-all">
            See all <PiArrowUpRightBold />
          </Link>
        </div>

        <div className="works" data-aos="fade-up">
          {projects.slice(0, 2).map((project) => (
            <Link
              to={`/project/${project.id}`}
              className="project"
              key={project.id}
            >
              <SingleProject {...project} />
            </Link>
          ))}
        </div>
        <div></div>
      </section>
      <Skills />
      <Experience />
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
              I build full-stack applications with a soft spot for beautiful
              frontends and smooth user experiences. I focus on crafting
              responsive, accessible UIs and scalable backend
              functionality—prioritizing performance, reusability, and
              delightful interactions.
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

import React from "react";
import "../assets/css/Home.css";
import { FaArrowDown } from "react-icons/fa6";
import { Timeline } from "../components";
const Experience = () => {
  return (
    <section className="steps" id="experience">
     
      <h2 className="head steps-head">
        My Journey <br /> <span>through code & growth</span>
      </h2>

      <p className="one-liner">
        From mentoring aspiring developers to building enterprise and product
        experiences,
        <br />
        every role has shaped the engineer I am today.
      </p>
      <div className="timeline">
        <div className="arrow-outline">
          <FaArrowDown />
        </div>
      </div>
      <Timeline />
    </section>
  );
};

export default Experience;

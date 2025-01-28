import React from "react";
import Wrapper from "../assets/wrappers/Skills";
import "../assets/css/Home.css"
import express from "../assets/images/express.png"
const Skills = () => {
  return <Wrapper>
    <h3 className="steps-head">
    My Power Toolkit
    </h3>
    <div className="skills">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
          </div>
        ))}
      </div>
  </Wrapper>;
};

export default Skills;


const skillsData = [
  // MERN Stack
  {
    name: "React.js",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png", // React.js logo
  },
  {
    name: "MongoDB",
   // image: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png", // MongoDB logo
   image:"https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
  },
  {
    name: "Express.js",
    image: express, // Express.js logo
  },
  {
    name: "Node.js",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png", // Node.js logo
  },

  // Core Web Development
  {
    name: "HTML",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png", // HTML logo
  },
  {
    name: "CSS",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png", // CSS logo
  },
  {
    name: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", // JavaScript logo
  },

  // Additional Technologies
  {
    name: "Git",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png", // Git logo
  },
  {
    name: "SASS",
    image: "https://cdn-icons-png.flaticon.com/512/919/919831.png", // SASS logo
  },
  {
    name: "Python",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", // Python logo
  },

  // Website Builders
  {
    name: "Wix",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // Wix logo
  },
  {
    name: "Shopify",
    image: "https://img.icons8.com/?size=100&id=uSHYbs6PJfMT&format=png&color=000000", // Shopify logo
  },
  {
    name: "WordPress",
    image: "https://cdn-icons-png.flaticon.com/512/174/174881.png", // WordPress logo
  },
];



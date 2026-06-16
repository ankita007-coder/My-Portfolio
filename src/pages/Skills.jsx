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
  {
    name: "React.js",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    name: "Express.js",
    image: express, // your local Express icon
  },
  {
    name: "MongoDB",
    image:
      "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
  },
  {
    name: "Redis",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
{
  name: "Tailwind CSS",
  image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
},
{
  name: "Tanstack Query",
  image: "https://tanstack.com/favicon.ico",
},
  {
    name: "Redux Toolkit",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "Git",
    image:
      "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "SASS",
    image:
      "https://cdn-icons-png.flaticon.com/512/919/919831.png",
  },
];



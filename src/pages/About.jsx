import React, { useRef } from "react";
import "../assets/css/Home.css";
import dp from "../assets/images/profile.png";
import Wrapper from "../assets/wrappers/About";
import Slider from "react-slick";
import coffee from "../assets/images/cold coffee.jpg";
import pasta from "../assets/images/pasta.jpg";
import pav from "../assets/images/pav bhaji.jpg";
import oats from "../assets/images/oats cupcaks.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "../components/Card";

const cards = [
  {
    text: (
     <p> Hi, I'm  <h1 className="steps-head">
            Ankita <span>Budhia</span>
          </h1> — a Software Engineer who enjoys turning ideas into products and coffee into commits. ☕ I love building things that people actually use, whether that's a polished frontend experience, a secure backend system, or a side project born from a random "this would be cool to build" thought.
   </p> ),
  },
  {
    text: `With 2.5 years of industry experience, I've worked on enterprise applications while continuously exploring modern technologies through personal projects. I enjoy the entire process of development—from architecting solutions and optimizing performance to obsessing over tiny UI details that most people won't notice.`,
  },
  {
    text: (<p>
      I'm naturally curious and love learning by building. 
    That's how I ended up creating projects ranging from a distributed rate
     limiting system to a Netflix-inspired movie platform. When I'm not coding, 
     you'll probably find me creating content, experimenting with new ideas, or 
     fixing "just one more bug". <br/> <br/>
     <span style={{ color: "var(--neongreen)" }}>Spoiler: I never do.</span>
    </p>)
  },
];



const About = () => {

  const list = [
    {
      name: "Penning down poetry to express fleeting thoughts",
      images: [],
    },
    {
      name: "Binge-watching movies and series, from classics to thrillers",
      images: [],
    },
    {
      name: "Experimenting in the kitchen, perfecting my next recipe.",
      images: [coffee, pav, pasta, oats],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Wrapper>
      <div className="about-me">
        <div className="my-pic">
          <LazyLoadImage src={dp} alt="profile" effect="blur" className="my-pic-box" />
        </div>
        <div className="me-text">
          {cards.map((card, index) => (
            <Card key={index} card={card} index={index} total={cards.length} />
          ))}
        </div>
      </div>
      <div className="others">
        <div className="steps-head">
          <h3>
            When I’m not working… <br />
            <span>You’ll find me</span>
          </h3>
        </div>

        {list.map((item, index) => (
          <div key={index} className="hobbies">
            <div className="text">
              <p>{item.name}</p>
            </div>

            <div className="slider">
              {item.images.length > 0 && (
                <Slider {...settings}>
                  {item.images.map((image, idx) => (
                    <div key={idx} className="slider-item">
                      <img src={image} alt="" />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default About;
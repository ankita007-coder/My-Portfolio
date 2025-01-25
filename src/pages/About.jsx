import React from "react";
import "../assets/css/Home.css";
import dp from "../assets/images/laptop.jpg";
import Wrapper from "../assets/wrappers/About";
import Slider from "react-slick";
import coffee from "../assets/images/cold coffee.jpg";
import pasta from "../assets/images/pasta.jpg"
import pav from "../assets/images/pav bhaji.jpg";
import oats from "../assets/images/oats cupcaks.jpg"
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
      images: [coffee, pav,pasta,oats],
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
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <div className="about-me">
        <div className="my-pic">
          <img src={dp} alt="profile" />
        </div>
        <div className="me-text">
          <h3 className="steps-head">
            Ankita <br /> <span>Budhia</span>
          </h3>
          <p className="one-liner">
            Empowering Your Online Presence with Expert <br /> Web Development
            and Design Solutions.
          </p>
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
                    <img src={image} alt={`carousel-${idx}`} />
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

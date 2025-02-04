import React from "react";
import "../assets/css/Home.css";
import dp from "../assets/images/profile.png";
import Wrapper from "../assets/wrappers/About";
import Slider from "react-slick";
import coffee from "../assets/images/cold coffee.jpg";
import pasta from "../assets/images/pasta.jpg";
import pav from "../assets/images/pav bhaji.jpg";
import oats from "../assets/images/oats cupcaks.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
          {/* <img src={dp} alt="profile" /> */}
          <LazyLoadImage
            src={dp}
            alt="profile"
            effect="blur" 
            className="my-pic-box"
          />
        </div>
        <div className="me-text">
          <h1 className="steps-head">
            Ankita <br /> <span>Budhia</span>
          </h1>
          <p className="one-liner">
            Empowering Your Online Presence with Expert <br /> Web Development
            and Design Solutions.
          </p>
          <div className="me-box">
            <p>ANKITA BUDHIA</p>
            <h3>Engineer by Day, Poet by Heart, Movie Buff by Night</h3>
            <h4>A Little Bit of History</h4>
            <p>
              Since I can remember, I’ve always been drawn to stories—whether
              told through poetry, books, or lines of code. My fascination with
              technology began in the early days of rooting Android phones and
              customizing ROMs. Watching technology evolve from the good ol’
              Nokia days to today’s smartphones sparked a lifelong curiosity.{" "}
              <br />
              <br /> In 2019, I discovered the world of web development. A
              simple YouTube video on HTML and CSS unlocked a passion for
              building digital experiences. Over the years, I’ve sharpened my
              skills in creating dynamic, scalable web applications, working
              with clients and teams to bring their ideas to life.
            </p>
            <h4>The Journey of Code</h4>
            <p>
              As a web developer with frontend expertise, I combine creativity
              with technical expertise to bring every project to life. With a
              strong focus on user-friendly experiences and a keen eye for
              design, I work closely with clients to fully understand their
              needs and turn their vision into reality. My approach centers
              around collaboration and clear communication, making sure to
              explain technical details in simple terms. Whether I’m building a
              brand-new website or enhancing an existing one, I always aim for
              excellence in both aesthetics and functionality. experiences.
            </p>
            <p>
              With a passion for staying ahead of the latest trends and
              technologies, I am dedicated to delivering outstanding results
              that exceed expectations. From freelancing gigs to professional
              roles, my journey has been a blend of learning, creating, and
              solving problems. My expertise lies in crafting intuitive
              interfaces and robust backends, all while delivering exceptional
              user
            </p>
          </div>
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

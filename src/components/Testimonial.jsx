import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../assets/css/Testimonial.css"
import prachi from "../assets/images/1.png";
import chavi from "../assets/images/2.png";
import mealmitra from "../assets/images/3.png"
import novmii from "../assets/images/novmiilogo.jpg"
const testimonials = [
  {
    name: "Chavi Kumari",
    role: "Graphic Designer",
    image: chavi,
    feedback:
      "I had the pleasure of working with Ankita on developing my website, and she did an incredible job! The final result was exactly what I envisioned, and she brought my ideas to life perfectly.",
  },
  {
    name: "Prachi Mittal",
    role: "Graphic Designer",
    image: prachi,

    feedback:
      "Working with Ankita Budhia was a seamless experience. She brought my website design to life with precision and professionalism, perfectly aligning the development with my vision.",
  },
  {
    name: "Meal Mitra",
    role: "Tiffin Service Company",
    image: mealmitra,
    feedback:
      "I am incredibly impressed with the work my freelancer has delivered. She has shown exceptional dedication, providing top-quality work at very reasonable prices while adhering strictly to the agreed timelines.",
  },
  {
    name:"Novmii IT Solutions",
    role:"IT Consultancy Company",
    image:novmii,
    feedback:`We would like to thank Ankita for creating our website. Her expertise, 
    performance and attention to detail made the entire process smooth and successful. 
    I had the privilege of working with Ankita in creating my website, 
    and she did an incredible job! The end result was exactly as I had imagined, 
    and she brought my ideas to life perfectly. Her performance, attention to detail 
    and expertise throughout the project was impressive. I am extremely satisfied with 
    the result and will definitely work with her again in the future!`
  }
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
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
const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div>
              <LazyLoadImage
              src={testimonial.image}
              alt={testimonial.name}
              effect="blur"
              className="testimonial-image"
            />
            </div>
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.role}</h4>
            <p>
              <FaQuoteLeft className="quote-icon" /> {testimonial.feedback}{" "}
              <FaQuoteRight className="quote-icon" />
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;


import lapy from "../assets/images/laptop.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../assets/css/Testimonial.css"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slides = [
    {
      title: "Chavi Kumari",
      subTitle: "Graphic Designer",
      description:
        "I had the pleasure of working with Ankita on developing my website, and she did an incredible job! The final result was exactly what I envisioned, and she brought my ideas to life perfectly. Her professionalism, attention to detail, and expertise were impressive throughout the project. I’m beyond satisfied with the outcome and will definitely be working with her again in the future. Highly recommend!",
      imageUrl: lapy,
    },
    {
      title: "Prachi Mittal",
      subTitle: "Graphic Designer",
      description:
        "Working with Ankita Budhia was a seamless experience. She brought my website design to life with precision and professionalism, perfectly aligning the development with my vision. The results were exactly as I had imagined, and her attention to detail was impressive. I highly recommend Ankita for her exceptional work!",
      imageUrl: lapy,
    },
  ];

  return (
    <Carousel infiniteLoop autoPlay interval={5000}>
      {slides.map((slide, index) => (
        <div className="slides" key={index}>
          <div className="profile-img">
            <LazyLoadImage
            src={slide.imageUrl}
            alt={slide.title}
            effect="blur" 
            width="200px"
            height="200px"
          />
          </div>
          <div className="review-text">
            <h2>{slide.title}</h2>
            <h3>{slide.subTitle}</h3>
            <p><span><FaQuoteLeft/> </span>{slide.description} <span><FaQuoteRight/></span></p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonial;

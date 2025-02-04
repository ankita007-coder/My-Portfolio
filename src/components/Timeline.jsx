import React, { useEffect } from "react";
import "../assets/css/Timeline.css";
import AOS from "aos";
const timelineData = [
  {
    number: "01",
    title: "DISCOVERY CALL",
    subtitle: "DO WE MATCH?",
    time: "2 HOURS",
    description:
      "Let's get to know each other! Before we build your website, we need to understand your goals and challenges. Think of it as a brainstorming session with a fun twist - we'll work together to bring your vision to life!",
  },
  {
    number: "02",
    title: "CONCEPT & STRATEGY",
    subtitle: "CHOOSING THE RIGHT PATH",
    time: "2 DAYS",
    description:"Choosing the right path for your website is like picking the perfect adventure. We'll explore options like Shopify (easy peasy for online stores), Wix (for those with creative flair), WordPress (for customization enthusiasts), and MERN Stack (for the tech-savvy). Together, we'll map out your dream website and set off on an exciting journey to bring it to life!"
  },
  {
    number: "03",
    title: "CUSTOM WEB DESIGN",
    subtitle: "SOME MAGIC",
    time: "2 WEEKS",
    description:"Get ready for some magic! You'll have a visually stunning website that's as unique as your brand. Whether you're using Shopify, Wix, or WordPress, templates will be customized to perfection. And if you're diving into the MERN Stack, a design will be built from scratch that's sure to wow. Expect a website that looks amazing on any device and offers a user experience that's simply delightful."
  },
  {
    number: "04",
    title: "DEVELOPMENT",
    subtitle: "BRINGING IT TO LIFE",
    time: "VARIABLE",
    description:"Get ready to watch your website come to life! The development phase will vary depending on your chosen platform. For Shopify, Wix, and WordPress, we'll focus on platform setup, plugin integration, and making sure your website is search engine-friendly. If you're building with MERN Stack, expect a robust and scalable application. Throughout the process, we'll conduct rigorous testing to ensure your website runs smoothly on any device."
    },
  {
    number: "05",
    title: "LAUNCH & SUPPORT",
    subtitle: "IT'S SHOWTIME!",
    time: "1 WEEK",
    description:
"It's showtime! We'll ensure a smooth launch on your chosen platform, or hand over the reins to you for deployment. The excitement doesn't stop there! Depending on our contract, we'll be here for you with ongoing support, ready to help you update your website and add new features whenever your heart desires. Let's make your website a star!" 
 },
];

const Timeline = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div className="timeline-container">
      {timelineData.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className={`timeline-box ${index % 2 === 0 ? "right" : "left"}`} data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}>
            <h4 className="time">{event.time}</h4>
            <h4 className="subtitle">{event.subtitle}</h4>
            <h3 style={{margin:"2px"}}>{event.title}</h3>
            <p>{event.description}</p>
          </div>
          <div className="timeline-number">{event.number}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

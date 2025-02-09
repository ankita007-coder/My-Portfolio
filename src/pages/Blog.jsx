import React from "react";
import Testimonial from "../components/Testimonial";
import "../assets/css/Testimonial.css";
const Blog = () => {
  return  <section className="testimonial" id="testimonial">
  <h2 className="head steps-head">
    What my <br /> <span>clients say</span>
  </h2>
  <div>
    <p className="one-liner">
      See what my clients have to say about working with me and the
      results I helped them achieve.
    </p>
  </div>
  <Testimonial />
</section>
};

export default Blog;

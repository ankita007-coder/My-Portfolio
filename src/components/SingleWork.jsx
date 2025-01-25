import React from "react";
import Wrapper from "../assets/wrappers/Work";
import dp from "../assets/images/laptop.jpg";
import { PiArrowUpRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const SingleWork = ({name, image}) => {
  return <Wrapper>
          <div className="image">
            <img src={image} alt="" srcset="" />
            <div className="image-text">
              <p>{name}</p>
              <p>Web Dev</p>
            </div>
          </div>
    </Wrapper>;
};

export default SingleWork;

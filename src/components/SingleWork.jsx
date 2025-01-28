import React from "react";
import Wrapper from "../assets/wrappers/Work";

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

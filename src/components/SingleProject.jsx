import React from "react";
import Wrapper from "../assets/wrappers/Work";

const SingleProject = ({name, image, desc, tech, repo, live}) => {
  return (
    <Wrapper>
      <div className="image">
        <img src={image} alt={name} />
        <div className="image-text">
          <p className="work-name">{name}</p>
          
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProject;

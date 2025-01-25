// import React from "react";
// import "../assets/css/Marquee.css";
// import { GiTalk } from "react-icons/gi";
// import { RiKakaoTalkFill } from "react-icons/ri";

// const Marquee = () => {
//   return (
//     <div className="marquee-wrapper">
//       <div className="marquee">
// <span>Let's Talk <GiTalk /> </span>
// <span>Let's Talk <RiKakaoTalkFill /></span>
// <span>Let's Talk <GiTalk /> </span>
// <span>Let's Talk <RiKakaoTalkFill /></span> <span>Let's Talk <GiTalk /> </span>
// <span>Let's Talk <RiKakaoTalkFill /></span> <span>Let's Talk <GiTalk /> </span>
// <span>Let's Talk <RiKakaoTalkFill /></span> <span>Let's Talk <GiTalk /> </span>
// <span>Let's Talk <RiKakaoTalkFill /></span>
// <span>Let's Talk <GiTalk /> </span>

//       </div>
//     </div>
//   );
// };

// export default Marquee;

import React from "react";
import Marquee from "react-fast-marquee";
import { GiTalk } from "react-icons/gi";
import { RiKakaoTalkFill } from "react-icons/ri";
const MarqueeText = () => {
  return (
    <Marquee
  style={{
    background: "#3228186a",
    color: "white",
    padding: "10px",
    margin:"2rem 0 0",
    borderTop:"1px solid #c8f90424",
    borderBottom:"1px solid #c8f90424",
  }}
>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <GiTalk />{" "}
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <RiKakaoTalkFill />
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <GiTalk />{" "}
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <RiKakaoTalkFill />
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <GiTalk />{" "}
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <RiKakaoTalkFill />
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <GiTalk />{" "}
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <RiKakaoTalkFill />
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <GiTalk />{" "}
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <RiKakaoTalkFill />
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <GiTalk />{" "}
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <RiKakaoTalkFill />
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <GiTalk />{" "}
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <RiKakaoTalkFill />
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <GiTalk />{" "}
  </span>
  <span style={{paddingLeft:"12px"}}>
    Let's Talk &nbsp; <RiKakaoTalkFill />
  </span>
</Marquee>

  );
};

export default MarqueeText;

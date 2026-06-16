import React, { useEffect } from "react";
import "../assets/css/Timeline.css";
import AOS from "aos";
const timelineData = [
  {
    number: "01",
    title: "FE FUNDINFO",
    subtitle: "UI DEVELOPER",
    time: "JUN 2026 – PRESENT",
    description:
      "Currently working on product-focused applications, translating complex requirements into intuitive and accessible user interfaces. Contributing to design implementation, component enhancements, and improving the overall user experience while gaining deeper insight into large-scale product development.",
    impact: "Product Engineering • UI Development • Accessibility",
  },

  {
    number: "02",
    title: "CAPGEMINI",
    subtitle: "FULL STACK SOFTWARE ENGINEER",
    time: "NOV 2023 – JUN 2026",
    description:
      "Owned end-to-end development of enterprise applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Built server-driven UI frameworks powered by JSON schemas, developed secure backend services with JWT authentication, and engineered LangChain-powered solutions including AI-assisted code generation workflows. Also contributed to GenAI initiatives by creating intelligent assistants capable of analyzing uploaded spreadsheets, generating reports, and producing visual charts from natural language prompts. Improved accessibility and application performance through optimization techniques, increasing Lighthouse scores from 65% to 91%.",
    highlights: [
      "Built LangChain-powered AI workflows for code generation",
      "Developed spreadsheet assistants that generated reports and charts from prompts",
      "Improved Lighthouse scores from 65% → 91%",
    ],
    impact: "Full Stack • GenAI • LangChain • React • Node.js",
  },

  {
    number: "03",
    title: "CODING NINJAS",
    subtitle: "TEACHING ASSISTANT",
    time: "MAY 2023 – SEP 2023",
    description:
      "Mentored students in React.js fundamentals, component architecture, debugging strategies, and problem-solving techniques.",

    highlights: ["Guided 1,000+ students in React and frontend development"],
    impact: "Mentorship • React • Problem Solving",
  },
  {
    number: "04",
    title: "NEWTON'S APPLE",
    subtitle: "WEB DEVELOPER INTERN",
    time: "OCT 2022 – JAN 2023",
    description:
      "Began my professional journey in a startup environment, developing frontend features, resolving performance bottlenecks, and writing tests to ensure application reliability. Learned to adapt quickly, take ownership, and deliver quality solutions in a fast-paced team.",
    impact: "Startup • Frontend • Testing",
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
          <div
            className={`timeline-box ${index % 2 === 0 ? "right" : "left"}`}
            data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
          >
            <h4 className="time">{event.time}</h4>
            <h4 className="subtitle">{event.subtitle}</h4>
            <h3 style={{ margin: "2px" }}>{event.title}</h3>
            <p>{event.description}</p>

            {event.highlights && (
              <ul className="highlights">
                {event.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            )}

            <div className="impact">{event.impact}</div>
          </div>
          <div className="timeline-number">{event.number}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

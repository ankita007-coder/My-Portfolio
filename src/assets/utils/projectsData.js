import dp from "../images/laptop.jpg";
import movix from "../images/movix.png"
import apishield from "../images/apishield.png"
export const projects = [
  {
    id: "movix",
    name: "🎬 Movix",
    image: movix,
    desc: "A Netflix-inspired movie discovery platform focused on performance, smooth interactions, and exceptional user experience.",
    tech: "React • TypeScript • React Query • Tailwind • Framer Motion • Auth0 • TMDB API",
    live: "https://movix-tmdb.netlify.app",
    repo: "https://github.com/ankita007-coder/TMDB-Movie-Explorer",
    details: [
      "A Netflix-inspired movie discovery platform built with modern React tooling, focused on performance, polished interactions, and delightful user experiences. Users can explore trending content, dive deep into movie and cast details, search effortlessly, and curate their own personalized watchlist.",
      "The frontend is built with React, TypeScript, and Vite. Tailwind CSS and Framer Motion deliver smooth animations, while React Query and the Context API manage server state and application state with high performance.",
      "Authentication is handled through Auth0, and the app pulls dynamic movie, cast, and streaming provider data from the TMDB API. The result is a polished discovery experience that feels fast and responsive on every interaction.",
    ],
    sections: [
      {
        title: "What I Built",
        items: [
          "Designed and developed a Netflix-style browsing experience featuring hero carousels and categorized movie sections.",
          "Built dynamic movie detail pages displaying ratings, genres, cast information, streaming providers, and release details.",
          "Implemented movie and actor search with debounced input, loading skeletons, empty states, and graceful error handling.",
          "Developed an interactive cast experience allowing users to explore actor profiles and discover their most popular works.",
          "Created a personalized watchlist system with authentication support and persistent local storage.",
        ],
      },
      {
        title: "Engineering Decisions I'm Proud Of",
        content: "One of my goals was to make the application feel fast, not just benchmark well. To achieve this, I leveraged React Query's prefetching capabilities to fetch movie details the moment users hovered over a movie card.",
      },
      {
        title: "Performance Optimizations",
        items: [
          "React Query caching with optimized stale times",
          "Prefetch-on-hover for instant movie detail transitions",
          "Lazy-loaded images to reduce initial load",
          "Code splitting using React.lazy()",
          "Query deduplication to avoid redundant requests",
          "Disabled unnecessary refetching on window focus",
        ],
      },
      {
        title: "User Experience Highlights",
        items: [
          "Netflix-inspired homepage with hero carousel",
          "Animated movie cards with hover previews",
          "Horizontally scrollable cast sections",
          "Interactive actor experience with biographies and known-for titles",
          "Unified movie and actor search experience",
          "Persistent watchlists with real-time badge updates",
          "Smooth Framer Motion interactions throughout the app",
        ],
      },
      {
        title: "What This Project Demonstrates",
        items: [
          "Frontend architecture and scalability",
          "Advanced React patterns",
          "Performance-first thinking",
          "Server-state management with React Query",
          "Component-driven development",
          "Authentication integration",
          "Responsive design and accessibility",
        ],
      },
    ],
  },
  {
    id: "apishield",
        name: "🛡️ APIShield",
    image: apishield,
    desc: "A distributed, horizontally scalable rate limiting system built to enforce request limits consistently across multiple backend instances.",
    tech: "Node.js • Express • Redis (ioredis) • MongoDB • Mongoose • Lua Scripting • Docker • React • TypeScript • Tailwind CSS • Axios • Vite",
    live: "",
    repo: "https://github.com/ankita007-coder/API_Shield",
    details: [
      "APIShield combines Redis-backed enforcement, dynamic rule management, and real-time monitoring to deliver production-grade API protection.",
      "The system is designed to scale horizontally across backend instances while keeping enforcement centralized through Redis and a priority-based rule resolution engine.",
      "A full-stack admin dashboard provides runtime control over rules and offers visibility into violation analytics for monitoring and tuning protection behavior.",
    ],
    sections: [
      {
        title: "What I Built",
        items: [
          "Designed a distributed rate limiting engine capable of scaling across multiple backend instances while maintaining centralized enforcement through Redis.",
          "Implemented three rate limiting algorithms: Fixed Window, Sliding Window using atomic Lua scripts, and Token Bucket.",
          "Built a dynamic rule engine with MongoDB-backed configuration supporting IP- and user-based targeting, global and endpoint-specific scopes, algorithm selection, and runtime activation.",
          "Developed a priority-based rule resolution system to determine the most specific rule automatically.",
          "Created a full-stack admin dashboard for managing rules and monitoring violation analytics in real time.",
          "Dockerized the entire application using multi-container orchestration for seamless local deployment and validation of horizontal scaling.",
          "Added fallback protection strategies to keep APIs protected during rule mismatches or partial system failures.",
        ],
      },
      {
        title: "Engineering Decisions I’m Proud Of",
        content: "The initial Sliding Window implementation required multiple Redis round trips for every request, which introduced additional latency under higher traffic. To solve this, I moved the logic into Lua scripts executed directly within Redis, making the operation atomic, more efficient, and consistent across distributed instances.",
      },
      {
        title: "What This Project Demonstrates",
        items: [
          "Distributed systems design",
          "Production-grade API protection",
          "Redis atomic operations and Lua scripting",
          "Strategy design pattern",
          "Horizontal scaling validation",
          "Docker multi-container orchestration",
          "Full-stack development",
          "Observability and analytics",
        ],
      },
    ],
    
  },
  {
    id: "devconnect",
    name: "👩‍💻 DevConnect",
    image: dp,
    desc: "A full-stack social networking application enabling users to connect, share ideas, build communities, and communicate in real time.",
    tech: "React • Material UI • React Icons • CSS • Node.js • Express • MongoDB • Mongoose • Socket.io • JWT",
    live: "",
    repo: "",
    details: [
      "DevConnect is a full-stack social networking application built using the MERN stack that enables users to connect, share ideas, build communities, and communicate in real time.",
      "From public and private posts to group interactions, instant messaging, and friend management, DevConnect focuses on creating an engaging and interactive social experience.",
      "Built with modern architecture including JWT authentication, WebSocket-based real-time communication, complex MongoDB relationships, and a responsive Material UI frontend.",
    ],
    sections: [
      {
        title: "What I Built",
        items: [
          "Designed and developed the complete application using the MERN stack, handling both frontend and backend implementation.",
          "Implemented secure user authentication and authorization using JWT and protected routes.",
          "Built a flexible posting system supporting both public and private posts with full CRUD functionality.",
          "Developed interactive engagement features including likes and unlikes, comments with edit and delete capabilities, and activity feeds.",
          "Created a group management system allowing users to create, join, and interact within communities.",
          "Implemented a friend system with friend requests, acceptance, rejection, and removal workflows.",
          "Built a user search feature to help users discover and connect with others on the platform.",
          "Integrated real-time chat using Socket.io, enabling instant messaging between connected users.",
          "Designed RESTful APIs and structured MongoDB schemas to efficiently manage users, posts, groups, friendships, and conversations.",
        ],
      },
      {
        title: "Engineering Decisions I'm Proud Of",
        content: "Social platforms aren't just CRUD applications—they're ecosystems of interconnected features that need to stay in sync. Building DevConnect taught me how to design scalable APIs supporting multiple user workflows, model complex relationships in MongoDB, manage real-time communication using WebSockets, handle authentication and protected resources securely, and build end-to-end features spanning database, backend, and frontend layers.",
      },
      {
        title: "What This Project Demonstrates",
        items: [
          "End-to-end MERN development",
          "Authentication and authorization with JWT",
          "Real-time communication with Socket.io",
          "MongoDB data modeling",
          "REST API design and integration",
          "Social network feature development",
          "Responsive UI development",
          "Full-stack problem solving",
        ],
      },
    ],
  },
  {
    id: "jobify",
    name: "💼 Jobify",
    image: dp,
    desc: "A full-stack job management application designed to help users track and manage their job applications in one place.",
    tech: "React • CSS • Node.js • Express • MongoDB • Mongoose • JWT",
    live: "",
    repo: "https://github.com/ankita007-coder/Jobify",
    details: [
      "Jobify is a full-stack job management application that enables users to securely maintain application records through an intuitive interface.",
      "The application demonstrates clean backend architecture with JWT authentication, protected routes, centralized error handling, and an MVC-inspired structure.",
      "Built to solve the common problem of tracking job applications across multiple platforms, Jobify keeps everything organized in one secure location.",
    ],
    sections: [
      {
        title: "What I Built",
        items: [
          "Developed a complete MERN application for managing and tracking job applications.",
          "Implemented secure user authentication using JWT with protected routes and middleware.",
          "Built CRUD functionality allowing users to create, view, update, and delete job entries.",
          "Designed RESTful APIs to handle application workflows efficiently.",
          "Structured the backend using an MVC-inspired architecture to improve maintainability and separation of concerns.",
          "Implemented centralized error handling using custom error classes and middleware.",
          "Created reusable backend utilities and helper functions to streamline development.",
        ],
      },
      {
        title: "Architecture & Best Practices",
        items: [
          "MVC-based backend structure for clean separation of concerns",
          "JWT-based authentication with secure token management",
          "Custom error handling middleware for consistent error responses",
          "Reusable utility functions and helper modules",
          "Protected routes with authentication middleware",
          "MongoDB schema design for job application tracking",
        ],
      },
      {
        title: "What This Project Demonstrates",
        items: [
          "Full-stack MERN development",
          "Authentication and protected routes",
          "REST API design",
          "MongoDB data modeling",
          "MVC-based backend architecture",
          "Error handling and middleware design",
          "CRUD application development",
        ],
      },
    ],
  },

]
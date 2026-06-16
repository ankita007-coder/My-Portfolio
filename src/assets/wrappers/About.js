import styled from "styled-components";

const Wrapper = styled.div`
  .about-me {
    display: flex;
    gap: 50px;
    align-items: flex-start;
    padding: 40px 20px;
    min-height: 300vh;
  }
  .steps-head {
  font-size: 2.5rem;
    color: var(--neongreen);
  }
  .my-pic {
    width: 40%;
    position: sticky;
    top: 40px;
    align-self: flex-start;
  }

  .my-pic-box {
    max-width: 100%;
    height: auto;
    border-radius: 24px;
  }

  .me-text {
    width: 60%;
    position: relative;
    /* needs to be tall enough — 100vh per card works well */
    height: calc(100vh * 3); /* adjust multiplier = number of cards */
  }
  .about-card {
    position: sticky;
    /* top is now set inline via style prop */
    min-height: 70vh;
    padding: 40px;
    border-radius: 28px;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    transform-origin: top center; /* key for stacking feel */
    will-change: transform;
  }
  .about-card p {
    font-size: 1.25rem;
    line-height: 2;
  }

  .others {
    margin-top: 80px;
  }

  .others h3 {
    font-size: 3rem;
  }

  .hobbies {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .hobbies .text {
    width: 30%;
  }

  .hobbies .text p {
    font-size: 1.4rem;
  }

  .hobbies .slider {
    width: 40%;
  }

  .hobbies .slider img {
    width: 100%;
  }

  @media (max-width: 768px) {
    .about-me {
      flex-direction: column;
      min-height: auto;
    }

    .my-pic,
    .me-text {
      width: 100%;
    }

    .my-pic {
      position: relative;
      top: 0;
    }

    .me-text {
      height: auto;
    }

    .about-card {
      position: relative;
      top: 0;
      min-height: auto;
    }

    .hobbies {
      flex-direction: column;
    }

    .hobbies .text,
    .hobbies .slider {
      width: 100%;
    }
  }
`;

export default Wrapper;

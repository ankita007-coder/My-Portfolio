import styled from "styled-components";

const Wrapper = styled.div`
  .about-me {
    display: flex;
    align-items: center;
    height: 500px;
    margin: 20px;
    gap: 40px;
    justify-content: space-evenly;
    .my-pic {
      width: 40%;
      height: 100%;
      position: sticky;
      top: 0;
      overflow-y: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .me-text {
      width: 50%;
      height: 100%;
      overflow-y: scroll;
      scrollbar-width: none;
      padding: 20px;
      box-sizing: border-box;
      h3 {
        margin-bottom: 10px;
        text-align: left;
        span {
          font-size: 8rem;
        }
      }
      p {
        text-align: left;
      }
      .me-box {
        margin-top: 6rem;
        background-color: rgba(218, 197, 167, 0.087);
        padding: 20px 24px;
        border-radius: 6px;
        border: 1px solid rgba(18, 16, 13, 0.28);
        h3 {
          font-size: 2rem;
          margin: 8px 0;
        }
        h4 {
          color: #6163eb;
          font-family:"Helvetica Neue",Helvetica,Arial;
          font-size: 1.2rem;
          font-weight: 500;
          margin: 0;
          
        }
      }
    }
  }
  .others{
        h3{
            font-size: 3rem;
        }
        .hobbies{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            .slider{
                width: 60%;
                img{
                    width: 100%;
                }
            }
        }
    }
`;

export default Wrapper;

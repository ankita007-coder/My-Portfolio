import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10% auto;
  .contact-image {
    width: 30%;
    img {
      width: 100%;
    }
  }
  .contact-details{
    width: 50%;
    .social-media{
      margin-top: 20px;
    }
  }
  .contact-form {
    
    background-color: rgba(218, 197, 167, 0.15);
    border:1px solid rgba(201, 250, 5, 0.28);
    h2{
      margin: 20px;
    }
    form {
      width: 100%;
      div {
        width: 100%;
        
        input,textarea{
          display: block;
          margin: 20px auto;
          width: 90%;
          padding: 8px;
          background-color: rgba(218, 197, 167, 0.16);
          border:1px solid rgba(201, 250, 5, 0.28);
          color: white;
          &::placeholder{
            color: rgba(218, 197, 167, 0.41);
          }
          &:focus,&:active{
            outline: none;
          }
        }
      }
      .btn{
          display: block;
          margin: 20px auto;
          background-color: #C9FA05;
          width: 90%;
          padding: 12px;
          border: none;
          outline: none;
          border-radius: 4px;
          color: #1D1E1F;
        }
    }
  }
`;

export default Wrapper;

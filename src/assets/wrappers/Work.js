import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  .selected-work {
    margin-top: 5rem;
  }

.image {
  position: relative;
  width: 100%;
  border: 1px solid #dac5a741;
}
.image img {
  width: 100%;
}

.image-text {
  left: 2%;
  width: 90%;
  position: absolute;
  padding: 4px 16px;
  display: flex;
  justify-content: space-between;
  bottom: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid #dac5a741;
}
`;

export default Wrapper;

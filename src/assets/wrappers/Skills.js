import styled from "styled-components";

const Wrapper = styled.div`
margin: 20px;
.skills{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    align-items: center;
    div{
        width: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(218, 197, 167, 0.13);
        border: 2px solid rgba(114, 249, 4, 0.21);
        //box-shadow: 0px 0px 10px 6px rgba(255, 255, 255, 0.22);
        border-radius: 8px;
        padding: 20px;
        img{
            width: 50%;
        }
    }
}

`

export default Wrapper
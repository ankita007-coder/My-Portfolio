import styled from "styled-components";

const Wrapper = styled.div`
    h1{
        color: var(--neongreen);
    }
    .service{
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        justify-content: center;
        width: 80%;
        background-color:rgba(218, 197, 167, 0.05);
        padding: 20px 40px;
        img{
            display: block;
            margin: 20px auto;
            width: 50%;
        }
        h3{
            color: white;
            font-size: 1rem;
        }
        p{
            color: wheat;
        }
    }
`


export default Wrapper
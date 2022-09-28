import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
    margin-top:130px;
`;

export const Title = styled.h1`
    width:600px;
    font-size: 3.125rem;
    color:white;
    text-align:center;
    line-height:1.2em;

    @media (max-width: 600px) {
        font-size:35px;
        width:400px;
    }
`;

export const Subtitle = styled.h2`
    color:white;
    font-size: 1.625rem;

    @media (max-width: 600px) {
        font-size:18px;
    }
`;

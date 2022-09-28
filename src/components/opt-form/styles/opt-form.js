import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 70px 0;
    color: white;
`

export const Pane = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items:center;
    }
`;

export const Text = styled.div`
    font-size: 24px;
    text-align:center;
    margin-bottom:20px;

    @media (max-width: 1000px) {
        font-size:18px;
        line-height:22px;
        max-width:100%;
        width:65vw;
        min-width:300px;
    }
`

export const Input = styled.input`
    width:450px;
    border:0;
    font-size:16px;
    padding: 10px;
    height: 40px;

    @media (max-width: 1000px) {
        max-width:100%;
        width:65vw;
        min-width:300px;
    }

`;

export const Buttom = styled.button`
    height: 60px;
    background-color: #e50914;
    text-transform: uppercase;
    color:white;
    font-size: 26px;
    border:0;
    cursor: pointer;
    border-radius:5px;
    padding:0 20px;

    img{
        filter: brightness(0) invert(1);
        width: 24px;
        margin-left:10px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }

    &:hover{
        background: #f40612;
    }

    @media (max-width: 1000px) {
        padding:0 20px;
        font-size:16px;
        margin-top: 20px;
        font-weight:bold;
    }
`




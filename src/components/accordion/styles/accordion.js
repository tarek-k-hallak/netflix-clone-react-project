import styled from 'styled-components'

export const Container = styled.section`
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`

    box-sizing:border-box;
    margin:0 auto;
    width: 950px;
    @media (max-width: 1000px) {
        max-width:100%;
        width:90vw;
    }
`;

export const Title = styled.h1`
    margin-top:70px;
    font-size: 50px;
    line-height:1.1;
    font-weight: bolder;
    color:white;
    text-align:center;

    @media (max-width:900px) {
        font-size: 40px;
    }
`;

export const Frame = styled.div``;

export const Item = styled.div`
    box-sizing:border-box;
    color:white;
    margin-bottom: 10px;
    font-size: 1.625rem;
    font-weight: 400;

    &:first-of-type{
        margin-top:1em;
    }
`;

export const Header = styled.div`
    display:flex;
    justify-content:space-between;
    cursor:pointer;
    margin-bottom:1px;
    font-weight:normal;
    background-color: #303030;
    padding: .8em 1.2em .8em 1.2em;
    user-select:none;

    img{
        filter: brightness(0) invert(1);
        width: 24px;
        height: 1em;
    }
    
    @media (max-width: 1000px) {
        font-size: 18px;
        padding: 0.6em 1em;
    }
`;

export const Body = styled.div`
    transition: max-height .25s cubic-bezier(.5,0,.1,1);
    line-height:normal;
    background-color: #303030;
    padding: .8em 2.2em .8em 1.2em;
    user-select:none;

    @media (max-width:600px) {
        font-size:16px;
        line-height:22px;
    }
`;

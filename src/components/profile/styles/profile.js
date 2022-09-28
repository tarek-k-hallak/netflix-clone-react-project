import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;

    max-width:80%;
    margin:70px auto;
`;

export const Title = styled.h1`
    width:100%;
    text-align:center;
    color: #fff;
    font-size: 48px;
    font-weight: 500;
`;

export const List = styled.ul`
    display:flex;
    flex-direction:row;
    margin-top:20px;
`;

export const Picture = styled.img`
    width:100%;
    max-width: 150px;
    height:auto;
    border: 3px solid black;
    cursor: pointer;
`;

export const Name = styled.p`
    color:#808080;
    text-overflow: ellipsis;
    font-size: 16px;
    cursor: context-menu;

    
`;

export const Item = styled.li`
    max-height:200px;
    max-width:200px;
    list-style-type: none;
    text-align:center;
    margin-right:30px;

    &:hover > ${Picture}{
        border: 3px solid white;
    }

    &:hover > ${Name}{
        font-weight:bold;
        color: white;
    }

    &:last-of-type{
        margin-right:0;
    }
`;






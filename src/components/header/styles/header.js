
import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom'

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    box-shadow: inset 0 -30px 80px 5px black;

    background: url(
        ${({ src }) => (src ? `./images/misc/${src}.jpg` : "./images/misc/home-bg.jpg")} )
        center / cover no-repeat;
    @media (max-width: 1000px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Container = styled.div`
    display:flex;
    height:64px;
    padding:18px 30px;
    justify-content:space-between;
    align-items:center;
    box-shadow: inset 0 30px 50px 10px black;

    a{
        display:flex;
    }
`;

export const Logo = styled.img`
    height:70px;
    width:140px;
    margin-right:40px;

    @media (min-width: 1449px) {
        height:45px;
        width:167px;
    }
`;

export const Group = styled.div`
    display:flex;
    align-items:center;
`;

export const Text = styled.p`
    color:white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.45);
`;

export const Link = styled.p`
    color:#fff;
    margin-right:30px;
    cursor: pointer;

    font-weight: ${({ active }) => (active ? "800" : "normal")};

    &:hover{
        font-weight:800;
    }

    &:last-of-type{
        margin-right:0;
    }
`;

export const ButtonLink = styled(RouterLink)`
    display:block;
    background-color: #e50914;
    width:84px;
    height:fit-content;
    color: white;
    border:0;
    font-size:15px;
    border-radius:4px;
    padding:8px 17px;
    cursor: pointer;
    text-decoration:none;
    box-sizing:border-box;

    &:hover{
        background-color:#f40612;
    }
`;

/*--Call for Action Lable ------------------------*/
export const CallForAction = styled.div`
    display:flex;
    flex-direction:column;
    margin:250px 30px 60px 30px;
    padding:20px;
    align-items:flex-start;
    width:50%;
    background-color:rgba(0, 0, 0, 0.65);
    border-radius:20px;

    @media (max-width: 1000px) {
        display:none;
    }
`;

export const Title = styled.h1`
    color:white;
    font-size: 2.2vw;
    line-height: normal;
    font-weight:bold;
    text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.45);
    margin:0;

    @media (max-width: 1000px) {
        font-size:4vw;
    }
`;

export const SubTitle = styled.h2`
    margin-top:20px;
    color:white;
    font-size: 1.3vw;
    line-height: normal;
    
    text-shadow: 2px 2px 1px rgb(0, 0, 0, 0.85);

    @media (max-width: 1000px) {
        font-size:2vw;
    }
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw (0, 0, 0, 0.35);
    background-color:#e6e6e6;
    color: #000;
    border:0;
    padding: 10px 30px;
    border-radius:5px;
    max-width: 130px;
    font-weight: bold;
    font-size: 20px;
    margin-top:30px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover{
        background-color: #ff1e1e;
        color:white;
        
    }

    @media (max-width: 1000px) {
        font-size:1.7vw;
        padding: 8px 20px;
    }
`;

/*--Search Bar ------------------------*/
export const Search = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;

    @media (max-width: 700px) {
        display:none
    }
`;

export const SearchIcon = styled.button`
    background-color:transparent;
    border:0;
    cursor: pointer;

    img{
        width:16px;
        filter: brightness(0) invert(1);
    }
    
`;

export const SearchInput = styled.input`
    background-color:#44444495;
    color:white;
    border:1px;
    border-radius: 3px;
    transition: width 0.5s;
    height:30px;
    font-size:14px;
    margin-left: ${({ active }) => (active ? "10px" : "0")};
    padding: ${({ active }) => (active ? "0 10px" : "0")};
    opacity: ${({ active }) => (active ? "1" : "0")};
    width: ${({ active }) => (active ? "200px" : "0")};
`;

/*-- Profile ------------------------*/
export const DropDown = styled.div`
    display:none;
    position:absolute;
    top:32px;
    right:0px;
    background-color:rgba(0, 0, 0, 0.85);
    padding:10px;
    width:80px;

    
    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group}{
        display:flex;
        justify-content:end;
        margin-bottom:10px;

        &:last-of-type{
            margin-bottom:0;
        }
    }

    img{
        margin-left:10px;
    }

    p{
        font-size:12px;
        margin-bottom:0;
        margin-top:0;
    }
`;

export const Profile = styled.div`
    display:flex;
    align-items:center;
    margin-left: 20px;
    position:relative;

    button{
        cursor: pointer;
    }

    &:hover > ${DropDown}{
        display:flex;
        flex-direction:column;
    }
`;

export const Picture = styled.img`
    background:url(${({ src }) => src});
    border:0;
    width:32px;
    height:32px;
    cursor: pointer;
`;


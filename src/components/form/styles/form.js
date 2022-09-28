import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.section`
    display:flex;
    flex-direction:column;
    min-height: 550px;
    max-width:320px;
    width:100%;
    background-color:rgb(0,0,0,0.65);
    border-radius:5px;
    margin:auto;
    padding: 60px 68px 40px;
    margin-bottom:100px;

    @media (max-width: 600px) {
        width:350px;
    }
`;

export const Error = styled.div`
    background-color:#e87c03;
    border-radius:4px;
    font-size:14px;
    margin: 0 0 16px;
    color: white;
    padding:15px 20px;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
    margin-top:30px;
`;

export const Base = styled.form`
    display:flex;
    flex-direction:column;
    max-width:450px;
    width:100%;
`;

export const Pane = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

export const Label = styled.label`
    color: #737373;
    margin-right:5px;
    font-size:16px;
    line-height: 0;
`;

export const Input = styled.input`
    background: #333;
    color:#fff;
    border-radius: 4px;
    border: 0;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom:20px;

    &:last-of-type{
        margin-bottom:30px;
    }
`;

export const Button = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight:bold;
    margin: 0 0 12px;
    padding: 16px;
    border:0;
    color: white;
    cursor: pointer;

    &:disabled{
        opacity:0.5;
    }
    
`;

export const Link = styled(RouterLink)`
    text-decoration:none;
    color:white;

    &:hover{
        text-decoration:underline;
    }
`;

export const Text = styled.div`
    margin-top:20px;
    color: #737373;
    font-size:16px;
    font-weight:500;
`;

export const TextSmall = styled.div`
    margin-top:15px;
    font-size:13px;
    line-height:normal;
    color:#8c8c8c;
`;
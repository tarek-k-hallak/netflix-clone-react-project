import styled from 'styled-components'

export const Container = styled.section`
    max-width:1000px;
    margin: auto;
    display:flex;
    flex-direction:column;
    padding:50px 56px 30px 56px;

    @media (max-width:1000px) {
        max-width:700px;
        padding:50px 30px 30px 30px;
    }
`;

export const Title = styled.div`
    font-size: 15px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Row = styled.div`
    display:grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 15px;

    @media (max-width:1000px) {
        grid-template-columns: auto auto;
    }
`;

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    text-align:left;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #757575;
    font-size: 13px;
    margin-bottom: 20px;
    cursor:pointer;
`;

export const Select = styled.select`
    width: 162px;
    height: 53px;
    background-color:black;
    color: white;
    margin-top: 20px;
`;

export const Option = styled.option``;

export const Text = styled.div`
    font-size:13px;
    color: #757575;
    margin-top: 20px;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height:0 ;
`;



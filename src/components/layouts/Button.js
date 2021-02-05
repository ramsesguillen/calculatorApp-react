import styled from 'styled-components';


export const Button = styled.button`
    -webkit-box-shadow: 10px 10px 31px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 31px -4px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 31px -4px rgba(0,0,0,0.75);
    border-radius: 1rem;
    border: none;
    display: block;
    width: 5rem;
    height: 5rem;
    font-size: 1.6rem;
    font-weight: bold;
    outline: none;
    cursor: pointer;

    background: ${ props => props.red ? 'red' : ( props.black ) ? '#000' : '#fff'};

`;
export const Simbol = styled( Button )`
    color: #fff;
    font-size: 2rem;
    text-transform: uppercase;
`;

export const InputButton = styled.div`
    border-radius: 1rem;
    -webkit-box-shadow: -4px -4px 5px 0px rgba(255,255,255,1);
    -moz-box-shadow: -4px -4px 5px 0px rgba(255,255,255,1);
    box-shadow: -4px -4px 5px 0px rgba(255,255,255,1);
`;
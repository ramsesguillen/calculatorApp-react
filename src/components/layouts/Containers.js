import styled from 'styled-components';


export const Container = styled.div`
    height: auto;
    max-width: 1100px;
    width: auto;
    background-color: #e1e1e1;
    padding: 3rem;
    border-radius: 7px;
    border: 2px solid #ecebeb;
    -webkit-box-shadow: 14px 8px 14px -1px rgba(209,209,209,1);
    -moz-box-shadow: 14px 8px 14px -1px rgba(209,209,209,1);
    box-shadow: 14px 8px 14px -1px rgba(209,209,209,1);
`;

export const ContainerButton = styled.div`
    margin: 2.5rem 0 2rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1.5rem;
`;

export const ContainerMain = styled.div`
    border-radius: 7px;
    -webkit-box-shadow: -11px -8px 14px -1px rgba(255,255,255,1);
    -moz-box-shadow: -11px -8px 14px -1px rgba(255,255,255,1);
    box-shadow: -11px -8px 14px -1px rgba(255,255,255,1);
`;
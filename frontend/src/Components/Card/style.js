import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 230px;
    margin-left: 2rem;
    text-decoration: none;
`;

export const CardImg = styled.img`
    height: 300px;
    width: 100%;
    border-radius: 2%;
`;

export const CardText = styled.span`
    color: gray;
    font-size: 1rem;
    width: auto;
    padding: 0.5rem;
    border-bottom: 1px solid lightgray;
`;

export const CardPrice = styled.span`
    font-weight: bold;
    font-size: 1rem;
    padding: 0.6rem;
    color: #09090a;
`;

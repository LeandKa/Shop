import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    @media (max-width: 731px) {
        justify-content: space-around;
        border-bottom: 1px solid gray;
    }
`;

export const TextLogo = styled(Link)`
    font-size: 1.9rem;
    margin-left: 2rem;
    color: #737380;
    padding: 1rem;
    opacity: 0.6;
    font-family: 'ZCOOL KuaiLe', cursive;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 731px) {
        display: none;
    }
`;

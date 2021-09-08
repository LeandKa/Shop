import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 1rem;
    width: 40%;
    border-radius: 10px;
    h1 {
        font-weight: 500;
        text-align: center;
        font-size: 24px;
        line-height: 150%;
        color: #41414d;
    }
    p {
        font-weight: 100%;
        font-size: 13px;
        text-align: center;
        margin-left: 1rem;
    }
`;

export const Button = styled(Link)`
    background: #51b853;
    text-align: center;
    text-decoration: none;
    color: white;
    border-radius: 10px;
    margin: 10px;
    font-size: 16px;
    padding: 1rem;
    transition: 0.2s ease-in;
    &:hover {
        background: green;
    }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const Container = styled(Link)`
    margin-top: 0.6rem;
    margin-right: 2rem;
    @media (max-width: 731px) {
        margin-top: 0;
    }
`;

export const Icon = styled(FaShoppingCart)`
    color: black;
    opacity: 0.7;
    font-size: 25px;
    margin-top: 0.4rem;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 731px) {
        margin-top: 0;
    }
`;

export const QtyDiv = styled.div`
    background-color: rgba(240, 52, 52, 1);
    position: relative;
    top: -13px;
    left: 14px;
    height: 16px;
    width: 16px;
    text-align: center;
    border-radius: 50%;
    span {
        position: relative;
        top: -4px;
        color: white;
    }
`;

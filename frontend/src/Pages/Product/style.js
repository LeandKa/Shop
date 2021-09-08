import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    @media (max-width: 731px) {
        borde: 2px solid black;
    }
`;

export const Content = styled.div`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    justify-content: center;
    align-content: center;
    margin-bottom: 1rem;
`;
export const ProductImg = styled.img`
    max-height: 700px;
    width: auto;
    @media (max-width: 731px) {
        width: 70%;
        height: 500px;
    }
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-bottom: 0.5rem;
    @media (max-width: 731px) {
        width: 80%;
    }
`;

export const ProductText = styled.h1`
    font-size: 32px;
    width: auto;
    font-weight: 300;
    color: #41414d;
    font-weight: italic;
    margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.h1`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 0.5rem;
`;

export const ProductSpan = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 2rem;
    @media (max-width: 731px) {
        font-size: 16px;
    }
`;

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    flex-wrap: wrap;
    h1 {
        font-weight: 500;
        font-size: 16px;
        color: #737380;
        margin-bottom: 0.2rem;
    }
    p {
        width: 448px;
        height: 64px;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #41414d;
    }
    @media (max-width: 731px) {
        display: none;
    }
`;

export const Icon = styled(FaShoppingCart)`
    color: white;
    font-size: 16px;
    margin-left: 10px;
`;

export const ProductButton = styled.button`
    background: #115d8c;
    border-radius: 4px;
    border: none;
    color: white;
    height: 44px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    position: relative;
    left: 0px;
    top: 50px;
    margin-bottom: 2rem;
`;

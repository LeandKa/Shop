import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    border-radius: 8px;
    background: #ffffff;
    @media (max-width: 450px) {
        flex-direction: column;
    }
`;

export const CardCartImg = styled.img`
    width: 256px;
    height: 211px;
    @media (max-width: 1125px) {
        width: auto;
    }
`;

export const CardCartDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 540px;
    p {
        font-weight: normal;
        font-size: 13px;
        margin-left: 1rem;
        line-height: 150%;
    }
    @media (max-width: 1125px) {
        width: 100%;
    }
`;

export const DisplayFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
`;

export const CartText = styled.h1`
    font-size: 22px;
    width: 448px;
    font-weight: 300;
    color: #41414d;
    font-weight: italic;
    margin-bottom: 0.5rem;
    @media (max-width: 1125px) {
        width: auto;
    }
`;

export const Icon = styled(FaTrash)`
    color: red;
    font-size: 25px;
    cursor: pointer;
`;

export const CartPrice = styled.h1`
    font-weight: 600;
    font-size: 22px;
    margin-top: 1rem;
`;

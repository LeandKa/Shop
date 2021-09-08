import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
    justify-content: center;
    align-content: center;
    border: 2px solid black;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
`;

export const SearchTitle = styled.h1`
    text-align: center;
    margin: 1rem;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #41414d;
`;

export const Cards = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

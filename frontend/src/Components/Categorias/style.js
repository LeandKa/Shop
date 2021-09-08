import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        margin-left: 0.2rem;
    }
`;

export const CategoriaButton = styled.div`
    cursor: pointer;
    color: gray;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 1rem;
    &:hover {
        opacity: 0.6;
    }
    &.active {
        cursor: pointer;
        font-size: 1rem;
        color: black;
        border-bottom: 4px solid #ffc0cb;
    }
`;

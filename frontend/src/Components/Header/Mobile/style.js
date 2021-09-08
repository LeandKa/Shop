import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    @media (max-width: 731px) {
        display: flex;
        justify-content: center;
        background: ${(props) => props.color};
        padding: 1rem;
    }
`;

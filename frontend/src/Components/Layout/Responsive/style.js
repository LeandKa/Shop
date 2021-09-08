import styled from 'styled-components';

export const ContainerShow = styled.div`
    display: none;
    @media (max-width: 731px) {
        display: flex;
        justify-content: center;
        background: ${(props) => props.color};
        padding: 1rem;
    }
`;

export const ContainerNone = styled.div`
    display: flex;
    @media (max-width: 731px) {
        display: none;
    }
`;

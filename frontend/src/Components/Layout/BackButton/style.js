import styled from 'styled-components';
import { GiBackwardTime } from 'react-icons/gi';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    margin-top: 2rem;
    padding: 1rem;
    width: 100px;
    margin-left: 3rem;
    &:hover {
        opacity: 0.6;
    }
`;

export const Icon = styled(GiBackwardTime)`
    font-size: 1rem;
    color: gray;
`;

export const Text = styled.span`
    font-size: 1rem;
    margin-left: 0.6rem;
    color: gray;
`;

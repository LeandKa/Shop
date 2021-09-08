import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Container = styled.form`
    display: flex;
    flex-direction: row;
    margin-right: 2rem;
    width: 100%;
`;

export const SearchInput = styled.input`
    border: none;
    height: 40px;
    padding: 0.5rem;
    background: rgba(238, 238, 238, 1);
    margin-top: 0.5rem;
    width: 400px;
    @media (max-width: 731px) {
        width: 100%;
    }
`;

export const Icon = styled(FaSearch)`
    color: black;
    background: rgba(238, 238, 238, 1);
    margin-top: 0.5rem;
    font-size: 30px;
    padding-right: 10px;
    height: 40px;
`;

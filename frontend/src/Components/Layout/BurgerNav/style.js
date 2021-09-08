import styled from 'styled-components';

export const Ul = styled.ul`
    list-style: none;
    display: none;
    flex-flow: row nowrap;
    li {
        padding: 18px 10px;
        text-align: center;
        list-style: none;
        a {
            text-decoration: none;
            color: white;
        }
    }
    @media (max-width: 800px) {
        display: flex;
        flex-flow: column nowrap;
        position: fixed;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(100%)'};
        top: -20px;
        right: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.4);
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            color: #fff;
        }
    }
`;
export const LiA = styled.a`
    text-decoration: none;
    padding: 0.5rem;
    font-size: 1rem;
    color: white;
    &:hover {
        cursor: pointer;
        color: red;
        border-bottom: 2px solid red;
        color: rgb(255, 30, 0);
        transition: all 0.2s ease-out;
        opacity: 0.8;
    }
`;

export const Button = styled.a`
    text-decoration: none;
    border: none;
    padding: 0.5rem;
    background: none;
    font-size: 1rem;
    color: white;
    &:hover {
        border-bottom: 2px solid red;
        cursor: pointer;
        color: red;
        color: rgb(255, 30, 0);
        transition: all 0.2s ease-out;
        opacity: 0.8;
    }
`;

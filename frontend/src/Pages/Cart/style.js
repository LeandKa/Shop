import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    width: 100%;
    @media (max-width: 1125px) {
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    h2 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
    }
    @media (max-width: 1125px) {
        width: 100%;
    }
`;
export const ContentPrice = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContentResume = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
    span {
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #41414d;
    }
`;

export const ContentResumeTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-top: 1px solid #dce2e6;
    padding-top: 1rem;
    h1 {
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
    }
`;

export const ContentTitle = styled.h1`
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #41414d;
`;

export const Title = styled.h1`
    font-weight: 500;
    padding: ${(props) => props.padding};
    font-size: 24px;
    line-height: 150%;
    color: #41414d;
`;

export const Resume = styled.div`
    display: flex;
    width 30%;
    padding: 2rem;
    height:120vh;
    flex-direction: column;
    background: #ffffff;
    @media (max-width: 1125px) {
        width:100%;
    }
`;

export const ResumeButton = styled.button`
    color: #f5f5fa;
    background: #51b853;
    margin-top: 2rem;
    height: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    mix-blend-mode: multiply;
    border: none;
    border-radius: 4px;
`;

export const ResumeLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40vh;

    a {
        color: #737380;
        margin-top: 0.5rem;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        text-decoration-line: underline;
        text-transform: uppercase;
    }
`;

export const Price = styled.span`
    font-weight: bold;
    font-size: 12px;
    padding: 0.4rem;
    color: #09090a;
`;

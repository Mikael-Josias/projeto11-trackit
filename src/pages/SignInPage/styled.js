import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #FFF;
    margin: auto;
    height: 100vh;
    width: 375px;
`;

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
`;

export const SignSpan = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #52B6FF;
    
    text-decoration-line: underline;

    &:visited, &:active{
        color: #52B6FF;
    }
`;
import styled from "styled-components";

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
`;

export const ContainerButton = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & div{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.2);
        height: 45px;
        width: 300px;
        cursor: pointer;
    }
`;
import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px 15px 20px;
    width: 100%;
`;

export const ButtonsOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    width: 100%;
`;

export const StyledButton = styled.button`
    background-color: ${props => props.colored? props.colored : null};
    color: ${props => props.colored === "white" ? "#52B6FF" : "white"};
    border: none;
    border-radius: 5px;
    margin: 0;
    height: 35px;
    width: 85px;
    cursor: pointer;
`;
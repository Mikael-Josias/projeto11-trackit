import styled from "styled-components";

export const StyledCard = styled.form`
    position: relative;
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px 15px 20px;
    margin-bottom: ${props => props.type === "create" ? "30px" : "10px"};
    width: 100%;
`;

export const ButtonsOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    width: 100%;
`;

export const StyledButton = styled.input`
    background-color: ${props => props.colored? props.colored : null};
    color: ${props => props.colored === "white" ? "#52B6FF" : "white"};
    border: none;
    border-radius: 5px;
    margin: 0;
    height: 35px;
    width: 85px;
    cursor: pointer;
`;

export const StyledIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    height: 15px;
    width: 15px;
    cursor: pointer;
`;
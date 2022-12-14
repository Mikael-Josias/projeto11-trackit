import styled from "styled-components";

export const StyledInput = styled.input`
    font-size: 20px;
    font-weight: 400;
    color: gray;

    border: 1px solid #D4D4D4;
    border-radius: 5px;

    padding-left: 10px;
    margin-bottom: 6px;

    height: 45px;
    width: 300px;

    &::placeholder{
        color: #DBDBDB;
    }

    &:focus{
        outline: none;
    }

    ${props => props.type === "submit" && `
        color: white;
        background-color: #52B6FF;
        border: none;
        margin-bottom: 25px;
        cursor: pointer;
    `}
`;
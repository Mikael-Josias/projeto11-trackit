import styled from "styled-components";

export const CheckContainer = styled.span`
    position: relative;
    display: inline-block;
    margin-right: 5px;
    height: 30px;
    width: 30px;
`;

export const CheckText= styled.label`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #DBDBDB;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

export const CheckDay = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin: 0;
    margin-right: 5px;
    height: 30px;
    width: 30px;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:checked + label{
        background-color: #CFCFCF;
        color: white;
    }
`;
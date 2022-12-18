import styled from "styled-components";

export const ContentContainer = styled.div`
    margin-bottom: 30px;
    & div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 23px;
    font-weight: 400;
    color: #126BA5;
    margin-bottom: 5px;
`;

export const SpanText = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.colored && props.colored};
`;

export const CreateButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    color: white;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    padding: 0;
    height: 35px;
    width: 40px;
    cursor: pointer;
`;
import styled from "styled-components";

export const HabitCard = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px 15px 20px;
    margin-bottom: ${props => props.type === "create" ? "30px" : "10px"};
    width: 100%;

    & div:nth-child(2){
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 69px;
        width: 69px;

        & img{
            position: relative;
            height: 28px;
            width: 35px;
            cursor: pointer;
        }
    }
`;

export const MiniSpan = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: #666666;
`;

export const StyledCheck = styled.input`
    position: absolute;
    color: #EBEBEB;
    background-color: #E7E7E7;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:checked{
        background-color: #8FC549;
    }
`;
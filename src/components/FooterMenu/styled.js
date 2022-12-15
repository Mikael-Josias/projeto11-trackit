import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;

    background-color: white;

    height: 70px;
    width: 100%;
`;

export const NavMenu = styled.div`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;
`;

export const ButtonOption = styled.button`
    font-size: 18px;
    font-weight: 400;
    color: #52B6FF;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:nth-child(1){
        margin-left: 35px;
    }
    &:nth-child(3){
        margin-right: 35px;
    }
`;

export const RoundButton = styled(ButtonOption)`
    position: absolute;
    top: -30px;
    left: calc(50% - 45px);

    color: white;
    background-color: #52B6FF;
    border-radius: 100%;

    height: 90px;
    width: 90px;
`;
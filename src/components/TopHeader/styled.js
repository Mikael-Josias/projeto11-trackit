import styled from "styled-components";

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #126BA5;
    height: 70px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const LogoImage = styled.img`
    margin: 0 20px;
`;

export const UserPicture = styled(LogoImage)`
    object-fit: cover;
    border-radius: 100%;
    height: 50px;
    width: 50px;
`;
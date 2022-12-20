import { useContext, useEffect } from "react";
import { StyledHeader, LogoImage, UserPicture } from "./styled";

import trackItLogo from "../../assets/trackItLogo.svg";

import { UserContext } from "../../contexts/UserContext";

export default function TopHeader(){
    const {userData} = useContext(UserContext);

    return (
        <StyledHeader data-test="header" >
            <LogoImage src={trackItLogo} />
            <UserPicture src={userData? userData.image : null} />
        </StyledHeader>
    );
}
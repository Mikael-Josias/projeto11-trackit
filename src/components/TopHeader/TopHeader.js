import { useContext } from "react";
import { StyledHeader, LogoImage, UserPicture } from "./styled";

import trackItLogo from "../../assets/trackItLogo.svg";

import { UserContext } from "../../contexts/UserContext";

export default function TopHeader(){
    const {userData} = useContext(UserContext);
    console.log(userData)
    return (
        <StyledHeader>
            <LogoImage src={trackItLogo} />
            <UserPicture src={userData.image} />
        </StyledHeader>
    );
}
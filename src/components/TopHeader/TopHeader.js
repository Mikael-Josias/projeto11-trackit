import { useContext } from "react";
import { StyledHeader, LogoImage, UserPicture } from "./styled";

import trackItLogo from "../../assets/trackItLogo.svg";

import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function TopHeader(){
    const {userData} = useContext(UserContext);
    
    return (
        <StyledHeader>
            <LogoImage src={trackItLogo} />
            <UserPicture src={userData.image} />
        </StyledHeader>
    );
}
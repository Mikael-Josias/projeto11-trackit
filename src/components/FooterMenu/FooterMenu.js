import { Link } from "react-router-dom";
import { ButtonOption, NavMenu, RoundButton, StyledFooter } from "./styled";

export default function FooterMenu(){
    return (
        <StyledFooter>
            <NavMenu>
                <Link to="/habitos">
                    <ButtonOption>Hábitos</ButtonOption>
                </Link>
                <Link to="/hoje">
                    <RoundButton>Hoje</RoundButton>                
                </Link>
                <Link to="historico">
                    <ButtonOption>Histórico</ButtonOption>
                </Link>
            </NavMenu>
        </StyledFooter>
    );
}
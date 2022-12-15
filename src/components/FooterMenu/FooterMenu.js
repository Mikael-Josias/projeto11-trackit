import { ButtonOption, NavMenu, RoundButton, StyledFooter } from "./styled";

export default function FooterMenu(){
    return (
        <StyledFooter>
            <NavMenu>
                <ButtonOption>Hábitos</ButtonOption>
                <RoundButton>Hoje</RoundButton>
                <ButtonOption>Histórico</ButtonOption>
            </NavMenu>
        </StyledFooter>
    );
}
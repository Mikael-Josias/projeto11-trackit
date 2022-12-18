
import { StyledInput } from "../Input/styled";
import WeekdaysCheck from "../WeekdaysCheck/WeekdaysCheck";
import { ButtonsOptions, StyledButton, StyledCard } from "./styled";

export default function HabitCard(props){
    return (
        <StyledCard>
            <StyledInput type="text" placeholder="nome do hábito" />
            <div>
                <WeekdaysCheck value="D" />
                <WeekdaysCheck value="S" />
                <WeekdaysCheck value="T" />
                <WeekdaysCheck value="Q" />
                <WeekdaysCheck value="Q" />
                <WeekdaysCheck value="S" />
                <WeekdaysCheck value="S" />
            </div>
            <ButtonsOptions>
                <StyledButton colored="white">Cancelar</StyledButton>
                <StyledButton colored="#52B6FF">Salvar</StyledButton>
            </ButtonsOptions>
        </StyledCard>
    );
}
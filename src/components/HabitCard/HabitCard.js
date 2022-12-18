
import { StyledInput } from "../Input/styled";
import WeekdaysCheck from "../WeekdaysCheck/WeekdaysCheck";
import { ButtonsOptions, StyledButton, StyledCard } from "./styled";

export default function HabitCard(props){
    const {cancelButton} = props;
    return (
        <StyledCard>
            <StyledInput type="text" placeholder="nome do hábito" />
            <div>
                <WeekdaysCheck value="D" realId="0" />
                <WeekdaysCheck value="S" realId="1" />
                <WeekdaysCheck value="T" realId="2" />
                <WeekdaysCheck value="Q" realId="3" />
                <WeekdaysCheck value="Q" realId="4" />
                <WeekdaysCheck value="S" realId="5" />
                <WeekdaysCheck value="S" realId="6" />
            </div>
            <ButtonsOptions>
                <StyledButton onClick={cancelButton} colored="white">Cancelar</StyledButton>
                <StyledButton colored="#52B6FF">Salvar</StyledButton>
            </ButtonsOptions>
        </StyledCard>
    );
}

import { StyledInput } from "../Input/styled";
import WeekdaysCheck from "../WeekdaysCheck/WeekdaysCheck";
import { ButtonsOptions, StyledButton, StyledCard } from "./styled";

export default function HabitCard(props){
    const {inputHabitName, setInputHabitName} = props;
    const {selectWeekDay} = props;
    const {cancelButton, saveButton} = props;
    return (
        <StyledCard onSubmit={(e) => saveButton(e)}>
            <StyledInput type="text" placeholder="nome do hábito" value={inputHabitName} onChange={(e) => setInputHabitName(e.target.value)} />
            <div>
                <WeekdaysCheck value="D" id="0" onChange={(e) => selectWeekDay(e.target.id)} />
                <WeekdaysCheck value="S" id="1" onChange={(e) => selectWeekDay(e.target.id)} />
                <WeekdaysCheck value="T" id="2" onChange={(e) => selectWeekDay(e.target.id)} />
                <WeekdaysCheck value="Q" id="3" onChange={(e) => selectWeekDay(e.target.id)} />
                <WeekdaysCheck value="Q" id="4" onChange={(e) => selectWeekDay(e.target.id)} />
                <WeekdaysCheck value="S" id="5" onChange={(e) => selectWeekDay(e.target.id)} />
                <WeekdaysCheck value="S" id="6" onChange={(e) => selectWeekDay(e.target.id)} />
            </div>
            <ButtonsOptions>
                <StyledButton type="button" onClick={cancelButton} colored="white" value="Cancelar"></StyledButton>
                <StyledButton type="submit" colored="#52B6FF" value="Salvar"></StyledButton>
            </ButtonsOptions>
        </StyledCard>
    );
}
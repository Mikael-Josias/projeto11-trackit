import { StyledInput } from "../Input/styled";
import { ButtonsOptions, StyledButton, StyledCard, StyledIcon } from "./styled";
import trashIcon from "../../assets/trash.svg";

import WeekdaysCheck from "../WeekdaysCheck/WeekdaysCheck";

export default function HabitCard(props){
    const {inputHabitName, setInputHabitName} = props;
    const {selectWeekDay} = props;
    const {cancelButton, saveButton, deleteFunction} = props;
    
    if (props.typeCard === "create") {
        return (
            <StyledCard type={props.typeCard} onSubmit={(e) => saveButton(e)} data-test="habit-create-container" >
                <StyledInput type="text" placeholder="nome do hábito" value={inputHabitName} onChange={(e) => setInputHabitName(e.target.value)} data-test="habit-name-input" />
                <div>
                    <WeekdaysCheck value="D" id="0" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} data-test="habit-day" />
                    <WeekdaysCheck value="S" id="1" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} data-test="habit-day" />
                    <WeekdaysCheck value="T" id="2" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} data-test="habit-day" />
                    <WeekdaysCheck value="Q" id="3" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} data-test="habit-day" />
                    <WeekdaysCheck value="Q" id="4" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} data-test="habit-day" />
                    <WeekdaysCheck value="S" id="5" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} data-test="habit-day" />
                    <WeekdaysCheck value="S" id="6" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} data-test="habit-day" />
                </div>
                <ButtonsOptions>
                    <StyledButton type="button" onClick={cancelButton} colored="white" value="Cancelar" data-test="habit-create-cancel-btn" ></StyledButton>
                    <StyledButton type="submit" colored="#52B6FF" value="Salvar" data-test="habit-create-save-btn"></StyledButton>
                </ButtonsOptions>
            </StyledCard>
        );
    }else{
        return (
            <StyledCard data-test="habit-container" >
                <div>
                    {props.children}
                    <StyledIcon onClick={() => deleteFunction(props.habitId)} data-test="habit-delete-btn" >
                        <img src={trashIcon} />
                    </StyledIcon>
                </div>
                <div>
                    <WeekdaysCheck value="D" id="0" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(0)} data-test="habit-day" />
                    <WeekdaysCheck value="S" id="1" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(1)} data-test="habit-day" />
                    <WeekdaysCheck value="T" id="2" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(2)} data-test="habit-day" />
                    <WeekdaysCheck value="Q" id="3" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(3)} data-test="habit-day" />
                    <WeekdaysCheck value="Q" id="4" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(4)} data-test="habit-day" />
                    <WeekdaysCheck value="S" id="5" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(5)} data-test="habit-day" />
                    <WeekdaysCheck value="S" id="6" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(6)} data-test="habit-day" />
                </div>
            </StyledCard>
        );
    }
    
}
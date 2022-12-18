import { StyledInput } from "../Input/styled";
import { ButtonsOptions, StyledButton, StyledCard, StyledIcon } from "./styled";
import trashIcon from "../../assets/trash.svg";

import WeekdaysCheck from "../WeekdaysCheck/WeekdaysCheck";

export default function HabitCard(props){
    const {inputHabitName, setInputHabitName} = props;
    const {selectWeekDay} = props;
    const {cancelButton, saveButton} = props;

    if (props.typeCard === "create") {
        return (
            <StyledCard type={props.typeCard} onSubmit={(e) => saveButton(e)}>
                <StyledInput type="text" placeholder="nome do hábito" value={inputHabitName} onChange={(e) => setInputHabitName(e.target.value)} />
                <div>
                    <WeekdaysCheck value="D" id="0" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} />
                    <WeekdaysCheck value="S" id="1" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} />
                    <WeekdaysCheck value="T" id="2" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} />
                    <WeekdaysCheck value="Q" id="3" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} />
                    <WeekdaysCheck value="Q" id="4" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} />
                    <WeekdaysCheck value="S" id="5" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} />
                    <WeekdaysCheck value="S" id="6" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} />
                </div>
                <ButtonsOptions>
                    <StyledButton type="button" onClick={cancelButton} colored="white" value="Cancelar"></StyledButton>
                    <StyledButton type="submit" colored="#52B6FF" value="Salvar"></StyledButton>
                </ButtonsOptions>
            </StyledCard>
        );
    }else{
        return (
            <StyledCard>
                <div>
                    {props.children}
                    <StyledIcon>
                        <img src={trashIcon} />
                    </StyledIcon>
                </div>
                <div>
                    <WeekdaysCheck value="D" id="0" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(0)} />
                    <WeekdaysCheck value="S" id="1" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(1)}/>
                    <WeekdaysCheck value="T" id="2" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(2)}/>
                    <WeekdaysCheck value="Q" id="3" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(3)}/>
                    <WeekdaysCheck value="Q" id="4" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(4)}/>
                    <WeekdaysCheck value="S" id="5" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(5)}/>
                    <WeekdaysCheck value="S" id="6" onChange={(e) => selectWeekDay(e.target.id)} isAvailable={props.isAvailable} isChecked={props.isChecked.includes(6)}/>
                </div>
            </StyledCard>
        );
    }
    
}
import { CheckContainer, CheckDay, CheckText } from "./styled";

export default function WeekdaysCheck(props){
    return (
        <CheckContainer>
            <CheckDay type="checkbox" {...props} disabled={!props.isAvailable} checked={props.isChecked}/>
            <CheckText htmlFor={props.isAvailable? props.id : null} >{props.value}</CheckText>
        </CheckContainer>
    );
}
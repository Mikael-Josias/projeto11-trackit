import { CheckContainer, CheckDay, CheckText } from "./styled";

export default function WeekdaysCheck(props){
    return (
        <CheckContainer>
            <CheckDay type="checkbox" id={props.realId} />
            <CheckText htmlFor={props.realId}>{props.value}</CheckText>
        </CheckContainer>
    );
}
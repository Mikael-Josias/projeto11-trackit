import { CheckContainer, CheckDay, CheckText } from "./styled";

export default function WeekdaysCheck(props){
    return (
        <CheckContainer>
            <CheckDay type="checkbox" {...props} />
            <CheckText htmlFor={props.id}>{props.value}</CheckText>
        </CheckContainer>
    );
}
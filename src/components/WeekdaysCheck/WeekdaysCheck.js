import { CheckContainer, CheckDay, CheckText } from "./styled";

export default function WeekdaysCheck(props){
    return (
        <CheckContainer>
            <CheckDay type="checkbox" id="1" />
            <CheckText htmlFor="1">{props.value}</CheckText>
        </CheckContainer>
    );
}
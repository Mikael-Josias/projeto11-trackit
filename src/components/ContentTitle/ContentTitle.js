import { toWeekday } from "../../utils/utils";
import { ContentContainer, CreateHabitButton, SpanText, StyledTitle } from "./styled";

export default function ContentTitle(props){
    const {showButton} = props;

    const today = {
        weekday: toWeekday[new Date().getUTCDay()],
        day: new Date().getUTCDate(),
        month: new Date().getUTCMonth() + 1
    }

    return (
        <ContentContainer>
            <div>
                <StyledTitle>{`${today.weekday}, ${today.day}/${today.month}`}</StyledTitle>
                {showButton? <CreateHabitButton>+</CreateHabitButton> : null}
            </div>
            <SpanText>Nenhum hábito concluído ainda</SpanText>
        </ContentContainer>
    );
}
import { toWeekday } from "../../utils/utils";
import { ContentContainer, StyledTitle } from "./styled";

export default function ContentTitle(props){
    const today = {
        weekday: toWeekday[new Date().getUTCDay()],
        day: new Date().getUTCDate(),
        month: new Date().getUTCMonth() + 1
    }

    return (
        <ContentContainer>
            <StyledTitle>{`${today.weekday}, ${today.day}/${today.month}`}</StyledTitle>
        </ContentContainer>
    );
}
import { ContentContainer, CreateHabitButton, SpanText, StyledTitle } from "./styled";

export default function ContentTitle(props){
    const {title, showButton} = props;

    

    return (
        <ContentContainer>
            <div>
                <StyledTitle>{title}</StyledTitle>
                {showButton? <CreateHabitButton>+</CreateHabitButton> : null}
            </div>
            {!showButton? <SpanText>Nenhum hábito concluído ainda</SpanText> : null}
        </ContentContainer>
    );
}
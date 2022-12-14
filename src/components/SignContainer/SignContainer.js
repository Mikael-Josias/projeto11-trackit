import { StyledContainer } from "./styled";

export default function SignContainer(props){
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
        
    );
}
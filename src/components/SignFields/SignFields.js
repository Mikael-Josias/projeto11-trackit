import { InputContainer } from "../../pages/SignInPage/styled";

export default function SignFields(props) {
    return (
        <InputContainer>
            {props.children}
        </InputContainer>
    );
}
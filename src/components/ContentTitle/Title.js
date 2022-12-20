import { StyledTitle } from "./styled";

export default function Title(props) {
    return (
        <>
            <StyledTitle {...props} >{props.children}</StyledTitle>
        </>
    );
}
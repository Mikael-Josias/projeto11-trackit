import { SpanText } from "./styled";

export default function TextSpan(props){
    return (
        <>
            <SpanText>{props.children}</SpanText>
        </>
    );
}
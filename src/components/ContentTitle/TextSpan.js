import { SpanText } from "./styled";

export default function TextSpan(props){
    return (
        <>
            <SpanText colored={props.colored} {...props} >{props.children}</SpanText>
        </>
    );
}
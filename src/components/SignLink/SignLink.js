import { Link } from "react-router-dom";
import { SignSpan } from "./styled";

export default function SignLink(props){
    return (
        <Link to={props.to} style={{textDecoration: 'none'}}>
            <SignSpan>{props.valueText}</SignSpan>
        </Link>
    );
}
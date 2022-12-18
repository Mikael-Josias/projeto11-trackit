import { ContentContainer } from "./styled";
import Title from "./Title";

export default function ContentTitle(props){
    const {showButton} = props;

    

    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    );
}
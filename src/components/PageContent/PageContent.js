import { ContentWrapper } from "./styled";

export default function PageContent(props){
    return (
        <ContentWrapper>
            {props.children}
        </ContentWrapper>
    );
}
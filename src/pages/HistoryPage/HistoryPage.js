import ContentTitle from "../../components/ContentTitle/ContentTitle";
import TextSpan from "../../components/ContentTitle/TextSpan";
import Title from "../../components/ContentTitle/Title";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import PageContent from "../../components/PageContent/PageContent";
import TopHeader from "../../components/TopHeader/TopHeader";

export default function HistoryPage() {
    return (
        <>
            <TopHeader/>
            <PageContent>
                <ContentTitle showButton={false}>
                    <div>
                        <Title>{`Histórico`}</Title>
                    </div>
                </ContentTitle>
                <TextSpan colored={"#666666"}>{`Em breve você poderá ver o histórico dos seus hábitos aqui!`}</TextSpan>
            </PageContent>
            <FooterMenu/>
        </>
    );
}
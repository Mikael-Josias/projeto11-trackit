
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import PageContent from "../../components/PageContent/PageContent";
import TopHeader from "../../components/TopHeader/TopHeader";

export default function HabitsPage(){
    return (
        <>
            <TopHeader/>
            <PageContent>
                <ContentTitle title="Hábitos" showButton={true} />
            </PageContent>
            <FooterMenu/>
        </>
    );
}
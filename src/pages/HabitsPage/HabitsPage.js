
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import CreateHabitButton from "../../components/ContentTitle/CreateHabitButton";
import Title from "../../components/ContentTitle/Title";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import PageContent from "../../components/PageContent/PageContent";
import TopHeader from "../../components/TopHeader/TopHeader";

export default function HabitsPage(){
    return (
        <>
            <TopHeader/>
            <PageContent>
                <ContentTitle showButton={true} >
                    <div>
                        <Title>Hábitos</Title>
                        <CreateHabitButton>+</CreateHabitButton>
                    </div>
                </ContentTitle>
                
            </PageContent>
            <FooterMenu/>
        </>
    );
}
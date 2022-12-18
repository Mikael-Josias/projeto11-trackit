
import { useState } from "react";

import ContentTitle from "../../components/ContentTitle/ContentTitle";
import CreateHabitButton from "../../components/ContentTitle/CreateHabitButton";
import TextSpan from "../../components/ContentTitle/TextSpan";
import Title from "../../components/ContentTitle/Title";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HabitCard from "../../components/HabitCard/HabitCard";
import PageContent from "../../components/PageContent/PageContent";
import TopHeader from "../../components/TopHeader/TopHeader";

export default function HabitsPage(){
    const [showCreateHabit, setShowCreateHabit] = useState(false);

    const hideCreateHabit = () => {
        setShowCreateHabit(false);
    }

    return (
        <>
            <TopHeader/>
            <PageContent>
                <ContentTitle showButton={true} >
                    <div>
                        <Title>Hábitos</Title>
                        <CreateHabitButton onClick={() => {setShowCreateHabit(!showCreateHabit);}}>+</CreateHabitButton>
                    </div>
                </ContentTitle>
                {showCreateHabit? <HabitCard cancelButton={hideCreateHabit}/> : null}
                <TextSpan colored="#666666">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TextSpan>
            </PageContent>
            <FooterMenu/>
        </>
    );
}
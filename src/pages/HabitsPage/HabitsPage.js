
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import ContentTitle from "../../components/ContentTitle/ContentTitle";
import CreateHabitButton from "../../components/ContentTitle/CreateHabitButton";
import TextSpan from "../../components/ContentTitle/TextSpan";
import Title from "../../components/ContentTitle/Title";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HabitCard from "../../components/HabitCard/HabitCard";
import PageContent from "../../components/PageContent/PageContent";
import TopHeader from "../../components/TopHeader/TopHeader";
import axios from "axios";
import { postNewHabit } from "../../constants/urls";

export default function HabitsPage(){
    const [showCreateHabit, setShowCreateHabit] = useState(false);
    const [inputHabitName, setInputHabitName] = useState("");
    const [checkHabitDays, setCheckHabitDays] = useState([]);
    const { userData } = useContext(UserContext);
    const hideCreateHabit = () => {
        setShowCreateHabit(false);
    };

    const selectWeekDay = (id) => {
        const newDays = [...checkHabitDays];
        if (checkHabitDays.includes(id)) {
            const i = newDays.indexOf(id);
            newDays.splice(i, 1);
        }else{
            newDays.push(id);
        }

        setCheckHabitDays(newDays);
    }

    const createNewHabit = (form) => {
        form.preventDefault();

        const newHabit = {
            name: inputHabitName,
            days: checkHabitDays
        }

        const config = {
            headers: {
                Authorization: `Bearer ${userData? userData.token : null}`
            }
        }

        const promisse = axios.post(postNewHabit, newHabit, config);
        promisse.then((res) => {console.log(res.data)});
        promisse.catch((err) => {alert(err.message)});
    };

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
                {showCreateHabit? <HabitCard inputHabitName={inputHabitName} setInputHabitName={setInputHabitName} selectWeekDay={selectWeekDay} cancelButton={hideCreateHabit} saveButton={createNewHabit} /> : null}
                <TextSpan colored="#666666">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TextSpan>
            </PageContent>
            <FooterMenu/>
        </>
    );
}

import { useContext, useEffect, useState } from "react";
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
import { getHabitList, postNewHabit } from "../../constants/urls";

export default function HabitsPage(){
    const [showCreateHabit, setShowCreateHabit] = useState(false);
    const [inputHabitName, setInputHabitName] = useState("");
    const [checkHabitDays, setCheckHabitDays] = useState([]);
    const [habitsList, setHabitsList] = useState([]);

    const { userData } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${userData? userData.token : null}`
        }
    }

    useEffect(() => {

        const promisse = axios.get(getHabitList, config);
        promisse.then((res) => {
            console.log(res.data);
            setHabitsList(res.data);
        });
        promisse.catch((err) => {
            console.log(err.data);
        });

    }, []);

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

        console.log(newDays);
        setCheckHabitDays(newDays);
    }

    const createNewHabit = (form) => {
        form.preventDefault();

        const newHabit = {
            name: inputHabitName,
            days: checkHabitDays
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
                
                {showCreateHabit? <HabitCard typeCard="create" isAvailable={true} inputHabitName={inputHabitName} setInputHabitName={setInputHabitName} selectWeekDay={selectWeekDay} cancelButton={hideCreateHabit} saveButton={createNewHabit} /> : null}
                
                {habitsList === []? <TextSpan colored="#666666">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TextSpan> : null}

                {habitsList.map((h, i) => <HabitCard isAvailable={false} isChecked={h.days} key={h.id}><TextSpan colored="#666666">{h.name}</TextSpan></HabitCard>)}
            </PageContent>
            <FooterMenu/>
        </>
    );
}
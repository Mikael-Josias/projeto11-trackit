import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { getTodayHabitsListUrl, postCheckHabit } from "../../constants/urls";
import { UserContext } from "../../contexts/UserContext";
import { toWeekday } from "../../utils/utils";

import TopHeader from "../../components/TopHeader/TopHeader";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import PageContent from "../../components/PageContent/PageContent";
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import Title from "../../components/ContentTitle/Title";
import TextSpan from "../../components/ContentTitle/TextSpan";
import TodayHabitCard from "../../components/TodayHabitCard.js/TodayHabitCard";
import { ProgressBarContext } from "../../contexts/ProgressBarContext";


export default function TodayPage(){
    const [todayHabits, setTodayHabits] = useState([]);
    const { userData } = useContext(UserContext);
    const { calculateProgress } = useContext(ProgressBarContext);

    let habitsDone = 0, habitsTotal = 0;

    const today = {
        weekday: toWeekday[new Date().getUTCDay()],
        day: new Date().getUTCDate(),
        month: new Date().getUTCMonth() + 1
    }

    const config = {
        headers: {
            Authorization: `Bearer ${userData? userData.token : null}`
        }
    }

    useEffect(() => {
        
        const promisse = axios.get(getTodayHabitsListUrl, config);
        promisse.then((res) => {
            console.log(res.data);
            setTodayHabits(res.data);

            habitsTotal = res.data.length;
            res.data.forEach((d) => {
                if (d.done) {
                    habitsDone += 1;
                }
            });
            
            calculateProgress(habitsDone, habitsTotal);
        });
        promisse.catch((err) => {alert(err.message);});
        
    }, []);

    const checkHabit = (id, data) => {
        const promisse = axios.post(postCheckHabit + `${id}/check`, {}, config);
        promisse.then(() => {
            console.log("sucesso");
        });
        promisse.catch(() => {
            console.log("erro");
        });

        const newData = [...todayHabits];

        newData.forEach((d) => {
            if (d.id === data.id) {
                d.done = true;
            }
        });

        setTodayHabits(newData);
    }

    return (
        <>
            <TopHeader/>
            <PageContent>
                <ContentTitle showButton={false}>
                    <div>
                        <Title>{`${today.weekday}, ${today.day}/${today.month}`}</Title>
                    </div>
                    <TextSpan colored="#BABABA">Nenhum hábito concluído ainda</TextSpan>
                </ContentTitle>

                {todayHabits.map((th) => <TodayHabitCard key={th.id} data={th} checkHabit={checkHabit} />)}
            </PageContent>
            <FooterMenu/>
        </>
    );
}
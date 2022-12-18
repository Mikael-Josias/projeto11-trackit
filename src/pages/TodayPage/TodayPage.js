import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { getTodayHabitsListUrl, postCheckHabit, postUncheckHabit } from "../../constants/urls";
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
    const { progress ,calculateProgress } = useContext(ProgressBarContext);

    const [habitsDone, setHabitsDone] = useState(0), habitsTotal = 0;

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

            let n = 0;
            res.data.forEach((d) => {
                if (d.done) {
                    n += 1;
                }
            });
            
            setHabitsDone(n);
            calculateProgress(n, res.data.length);
        });
        promisse.catch((err) => {alert(err.message);});
        
    }, []);

    const checkHabit = (id, data) => {
        let path = "check";
        let n = habitsDone + 1;
        
        if (data.done) {
            path = "uncheck";
            n -= 2;
        }

        const promisse = axios.post(postCheckHabit + `${id}/${path}`, {}, config);
        promisse.then(() => {
            console.log("sucesso");
        });
        promisse.catch(() => {
            console.log("erro");
        });

        const newData = [...todayHabits];

        newData.forEach((d) => {
            if (d.id === data.id) {
                if (data.done) {
                    data.done = false;
                }else{
                    data.done = true;
                }
            }
        });

        setTodayHabits(newData);

        setHabitsDone(n);
        calculateProgress(n, newData.length);
    }

    return (
        <>
            <TopHeader/>
            <PageContent>
                <ContentTitle showButton={false}>
                    <div>
                        <Title>{`${today.weekday}, ${today.day}/${today.month}`}</Title>
                    </div>
                    <TextSpan colored={progress === 0 ?"#BABABA" : "#8FC549"}>{progress === 0? `Nenhum hábito concluído ainda` : `${progress}% dos hábitos concluídos`}</TextSpan>
                </ContentTitle>

                {todayHabits.map((th) => <TodayHabitCard key={th.id} data={th} checkHabit={checkHabit} />)}
            </PageContent>
            <FooterMenu/>
        </>
    );
}
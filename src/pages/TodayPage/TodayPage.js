import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { getTodayHabitsListUrl } from "../../constants/urls";
import { UserContext } from "../../contexts/UserContext";
import { toWeekday } from "../../utils/utils";

import TopHeader from "../../components/TopHeader/TopHeader";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import PageContent from "../../components/PageContent/PageContent";
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import Title from "../../components/ContentTitle/Title";
import TextSpan from "../../components/ContentTitle/TextSpan";


export default function TodayPage(){
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);

    const today = {
        weekday: toWeekday[new Date().getUTCDay()],
        day: new Date().getUTCDate(),
        month: new Date().getUTCMonth() + 1
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData? userData.token : null}`
            }
        }
        const promisse = axios.get(getTodayHabitsListUrl, config);
        promisse.then((res) => {console.log(res);});
        promisse.catch((err) => {console.log(err);});
        
    }, []);

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
                
            </PageContent>
            <FooterMenu/>
        </>
    );
}
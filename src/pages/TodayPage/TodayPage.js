import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { getTodayHabitsListUrl } from "../../constants/urls";
import { UserContext } from "../../contexts/UserContext";

import TopHeader from "../../components/TopHeader/TopHeader";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import PageContent from "../../components/PageContent/PageContent";


export default function TodayPage(){
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    
    useEffect(() => {
        if (userData === undefined) {
            navigate("/");
        }
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        const promisse = axios.get(getTodayHabitsListUrl, config);
        promisse.then((res) => console.log(res));
        promisse.catch((err) => console.log(err));
    }, []);

    return (
        <>
            <TopHeader/>
            <PageContent>
                Esté são os hábitos!
            </PageContent>
            <FooterMenu/>
        </>
    );
}
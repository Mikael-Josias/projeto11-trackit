import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { getTodayHabitsListUrl } from "../../constants/urls";
import { UserContext } from "../../contexts/UserContext";

import TopHeader from "../../components/TopHeader/TopHeader";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import PageContent from "../../components/PageContent/PageContent";
import ContentTitle from "../../components/ContentTitle/ContentTitle";


export default function TodayPage(){
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);

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
                <ContentTitle showButton={false}/>
                
            </PageContent>
            <FooterMenu/>
        </>
    );
}
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import TopHeader from "../../components/TopHeader/TopHeader";


export default function TodayPage(){
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    
    useEffect(() => {
        if (userData === undefined) {
            alert("Desculpe, sua sessão expirou!");
            navigate("/");
        }
    }, [userData]);

    return (
        <>
            <TopHeader/>
            Today is the day!
        </>
    );
}
import { useContext, useState } from "react";
import axios from "axios";

import logo from "../../assets/logo.svg";
import { logInUserUrl } from "../../constants/urls";

import SignFields from "../../components/SignFields/SignFields";
import Input from "../../components/Input/Input";
import LogoImage from "../../components/LogoImage/LogoImage";
import SignContainer from "../../components/SignContainer/SignContainer";
import SignLink from "../../components/SignLink/SignLink";

import { UserContext } from "../../contexts/UserContext";

export default function SignInPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const userContext = useContext(UserContext);

    function LogIn(e){
        e.preventDefault();
        
        const user = {
            email,
            password
        }

        setLoading(true);
        const promisse = axios.post(logInUserUrl, user);
        promisse.then((res) => {
            setLoading(false);
            userContext.LogInUser(res.data);
        });
        promisse.catch((err) => {
            setLoading(false);
            alert(err.message);
        });
    }

    return (
        <SignContainer>
            <LogoImage src={logo} />

            <SignFields onSubmit={(e) => LogIn(e)} >
                <Input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                <Input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />

                <Input type="submit" value="Entrar" disabled={loading} />
            </SignFields>

            <SignLink to="/cadastro" valueText="Não tem uma conta? Cadastre-se!" />
        </SignContainer>
    );
}
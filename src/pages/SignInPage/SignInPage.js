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
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ContainerButton } from "./styled";

export default function SignInPage(){
    const navigate = useNavigate();

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

            
            navigate("/hoje");

            
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
                <Input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} data-test="email-input" />
                <Input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} data-test="password-input" />

                <ContainerButton>
                    {loading && <div>
                        <ThreeDots
                            height="45"
                            width="80"
                            radius="1"
                            color="#FFF"
                            ariaLabel="three-dots-loading"
                        />
                    </div>}
                    
                    <Input type="submit" value={loading? "" : "Entrar"} disabled={loading} data-test="login-btn" />
                </ContainerButton>
            </SignFields>

            <SignLink to="/cadastro" valueText="N??o tem uma conta? Cadastre-se!" data-test="signup-link" />
        </SignContainer>
    );
}
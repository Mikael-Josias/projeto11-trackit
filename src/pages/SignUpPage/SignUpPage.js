import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registerNewUserUrl } from "../../constants/urls";

import logo from "../../assets/logo.svg";

import LogoImage from "../../components/LogoImage/LogoImage";
import SignContainer from "../../components/SignContainer/SignContainer";
import SignFields from "../../components/SignFields/SignFields";
import Input from "../../components/Input/Input";
import SignLink from "../../components/SignLink/SignLink";
import { ThreeDots } from "react-loader-spinner";
import { ContainerButton } from "../SignInPage/styled";


export default function SignUpPage(){
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loadingRequest, setLoadingRequest] = useState(false);

    function registerNewUser(form){
        form.preventDefault();

        const newUser = {
            email: email,
            password: password,
            name: name,
            image: image
        }

        setLoadingRequest(true);
        const promisse = axios.post(registerNewUserUrl, newUser);
        promisse.then((res) => {
            setLoadingRequest(false);
            navigate("/");
        });
        promisse.catch((err) => {
            setLoadingRequest(false);
            alert("Ops! Parece que houve um erro, tente novamente mais tarde.");
        });
    }

    return (
        <SignContainer>
            <LogoImage src={logo} />

            <SignFields onSubmit={(s) => registerNewUser(s)} >
                <Input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loadingRequest} data-test="email-input" />
                <Input type="password" placeholder="senha" autocomplete="off" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={loadingRequest} data-test="password-input" />
                <Input type="text" placeholder="nome" required value={name} onChange={(e) => setName(e.target.value)} disabled={loadingRequest} data-test="user-name-input" />
                <Input type="url" placeholder="foto" required value={image} onChange={(e) => setImage(e.target.value)} disabled={loadingRequest} data-test="user-image-input" />
                
                
                <ContainerButton>
                    {loadingRequest && <div>
                            <ThreeDots
                                height="45"
                                width="80"
                                radius="1"
                                color="#FFF"
                                ariaLabel="three-dots-loading"
                            />
                        </div>
                    }
                
                    <Input type="submit" value={loadingRequest? "" : "Cadastrar"} disabled={loadingRequest} data-test="signup-btn" />
                </ContainerButton>
            
            </SignFields>

            
            <SignLink to="/" valueText="J?? tem uma conta? Fa??a login!" data-test="login-link" />

        </SignContainer>
    );
}
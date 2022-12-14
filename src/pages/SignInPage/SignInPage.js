import { SignSpan } from "./styled";
import logo from "../../assets/logo.svg";
import SignFields from "../../components/SignFields/SignFields";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import LogoImage from "../../components/LogoImage/LogoImage";
import SignContainer from "../../components/SignContainer/SignContainer";
import SignLink from "../../components/SignLink/SignLink";


export default function SignInPage(){
    return (
        <SignContainer>
            <LogoImage src={logo} />
            <SignFields>
                <Input type="email" placeholder="email" required />
                <Input type="password" placeholder="senha" required />
                <Input type="submit" value="Entrar"/>
            </SignFields>

            <SignLink to="/cadastro" valueText="Não tem uma conta? Cadastre-se!" />
        </SignContainer>
    );
}
import LogoImage from "../../components/LogoImage/LogoImage";
import SignContainer from "../../components/SignContainer/SignContainer";

import logo from "../../assets/logo.svg";
import SignFields from "../../components/SignFields/SignFields";
import Input from "../../components/Input/Input";
import SignLink from "../../components/SignLink/SignLink";

export default function SignUpPage(){
    return (
        <SignContainer>
            <LogoImage src={logo} />

            <SignFields>
                <Input type="email" placeholder="email" required />
                <Input type="password" placeholder="senha" autocomplete="off" required />
                <Input type="text" placeholder="nome" required />
                <Input type="url" placeholder="foto" required />
                <Input type="submit" value="Cadastrar"/>
            </SignFields>

            <SignLink to="/" valueText="Já tem uma conta? Faça login!" />
        </SignContainer>
    );
}
import { Container, SignSpan } from "./styled";
import logo from "../../assets/logo.svg";
import SignFields from "../../components/SignFields/SignFields";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import LogoImage from "../../components/LogoImage/LogoImage";


export default function SignInPage(){
    return (
        <Container>
            <LogoImage src={logo} />
            <SignFields>
                <Input type="email" placeholder="email"/>
                <Input type="password" placeholder="senha"/>
                <Input type="submit" value="Entrar"/>
            </SignFields>

            <Link to="/" style={{textDecoration: 'none'}}>
                <SignSpan>Não tem uma conta? Cadastre-se!</SignSpan>
            </Link>
        </Container>
    );
}
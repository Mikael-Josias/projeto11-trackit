import { Link } from "react-router-dom";
import { ButtonOption, NavMenu, RoundButton, StyledFooter } from "./styled";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { ProgressBarContext } from "../../contexts/ProgressBarContext";

export default function FooterMenu(){
    const { progress } = useContext(ProgressBarContext);

    return (
        <StyledFooter>
            <NavMenu data-test="menu" >
                <Link to="/habitos" data-test="habit-link" >
                    <ButtonOption>Hábitos</ButtonOption>
                </Link>
                <Link to="/hoje" data-test="today-link" >
                    <RoundButton>
                        <CircularProgressbar
                            value={progress}
                            text="Hoje"
                            background={true}
                            backgroundPadding={6}
                            counterClockwise={false}
                            styles={buildStyles({
                                strokeLinecap: 'round',
                                textSize: '18px',
                                pathTransitionDuration: 0.5,
                            
                                pathColor: `#FFF`,
                                textColor: '#FFF',
                                trailColor: '#52B6FF',
                                backgroundColor: '#52B6FF',
                            })}></CircularProgressbar>
                    </RoundButton>                                
                </Link>
                <Link to="/historico" data-test="history-link" >
                    <ButtonOption>Histórico</ButtonOption>
                </Link>
            </NavMenu>
        </StyledFooter>
    );
}
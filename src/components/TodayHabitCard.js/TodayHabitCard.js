import { HabitCard, MiniSpan, StyledCheck } from "./styled";
import checkIcon from "../../assets/check.svg";

import TextSpan from "../ContentTitle/TextSpan";

export default function TodayHabitCard(props){
    const {data} = props;
    const {checkHabit, uncheckHabit} = props;

    return (
        <HabitCard>
            <div>
                <TextSpan colored="#666666" >{data.name}</TextSpan>
                <MiniSpan>Sequência atual: {data.currentSequence} dia(s)</MiniSpan>
                <br/>
                <MiniSpan>Seu recorde: {data.highestSequence} dia(s)</MiniSpan>
            </div>
            <div>
                <StyledCheck type="checkbox" id={data.id} checked={data.done} onChange={() => checkHabit(data.id, data)} />
                <label htmlFor={data.id}><img src={checkIcon} /></label>
            </div>
        </HabitCard>
    );
}
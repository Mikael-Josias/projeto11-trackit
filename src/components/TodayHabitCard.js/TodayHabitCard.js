import { HabitCard, MiniSpan, StyledCheck } from "./styled";
import checkIcon from "../../assets/check.svg";

import TextSpan from "../ContentTitle/TextSpan";

export default function TodayHabitCard(props){
    const {data} = props;
    const {checkHabit, uncheckHabit} = props;

    return (
        <HabitCard data-test="today-habit-container" >
            <div>
                <TextSpan colored="#666666" data-test="today-habit-name" >{data.name}</TextSpan>
                <MiniSpan data-test="today-habit-sequence" >Sequência atual: {data.currentSequence} dia(s)</MiniSpan>
                <br/>
                <MiniSpan data-test="today-habit-record" >Seu recorde: {data.highestSequence} dia(s)</MiniSpan>
            </div>
            <div>
                <StyledCheck type="checkbox" id={data.id} checked={data.done} onChange={() => checkHabit(data.id, data)} data-test="today-habit-check-btn" />
                <label htmlFor={data.id}><img src={checkIcon} /></label>
            </div>
        </HabitCard>
    );
}
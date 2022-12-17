import { toWeekday } from "../../utils/utils";

export default function ContentTitle(props){

    const today = {
        weekday: toWeekday[new Date().getUTCDay()],
        day: new Date().getUTCDate(),
        month: new Date().getUTCMonth() + 1,
    }

    return (
        <>
            <h2>{`${today.weekday} ,${today.day}/${today.month}`}</h2>
        </>
    );
}
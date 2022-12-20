import { CreateButton } from "./styled";

export default function CreateHabitButton(props){
    return (
        <>
            <CreateButton {...props} data-test="habit-create-btn" >{props.children}</CreateButton>
        </>
    );
}
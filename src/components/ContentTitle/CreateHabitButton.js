import { CreateButton } from "./styled";

export default function CreateHabitButton(props){
    return (
        <>
            <CreateButton>{props.children}</CreateButton>
        </>
    );
}
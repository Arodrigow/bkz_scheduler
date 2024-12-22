import { ListUnitProps } from "@/types/types";
import ButtonComponent from "./button";

export default function ListUnit(props: ListUnitProps){
    const onClickHandler = () =>{
        const index = props.list.findIndex((value) => value === props.text);
        let aux: string[] = Array.from(props.list);
        aux.splice(index,1);
        props.setList(aux);
    }

    return (
        <div className="flex justify-between gap-4">
            <span className="text-lg font-bold text-school">{props.text}</span>
            <ButtonComponent text="Apagar" type="delete" onClickHandler={onClickHandler}></ButtonComponent>
        </div>
    )
}
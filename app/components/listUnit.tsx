import { ListUnitProps } from "@/types/types";
import ButtonComponent from "./button";

export default function ListUnit(props: ListUnitProps){
    return (
        <div className="flex justify-between gap-4">
            <span className="text-lg font-bold text-school">{props.text}</span>
            <ButtonComponent text="Apagar" type="delete"></ButtonComponent>
        </div>
    )
}
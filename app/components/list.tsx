import { EntryListProps } from "@/types/types";
import MainTitleComponent from "./mainTitle";
import ListUnit from "./listUnit";
import arrayCompare from "../utils/arrayCompare";

export default function ListComponent(props: EntryListProps) {
    return (
        <div className="w-full sm:w-1/2 sm:border-l-2 border-school flex flex-col gap-8">
            <MainTitleComponent text={props.title ? props.title : "Indefinido"}></MainTitleComponent>            
            <div className="pl-4 sm:pl-12">
                {arrayCompare(props.list, []) ? 'Nenhum cadastro' : props.list.map((unit, i) =>
                    <ListUnit text={unit} key={i} list={props.list} setList={props.setList}></ListUnit>
                )}
            </div>
        </div>
    )
}
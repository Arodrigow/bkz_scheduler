import { EntryProps } from "@/types/types";
import MainTitleComponent from "./mainTitle";
import ListUnit from "./listUnit";
import arrayCompare from "../utils/arrayCompare";

export default function ListComponent(props: EntryProps) {
    return (
        <div className="w-full sm:w-1/2 sm:border-l-2 border-school flex flex-col gap-8">
            <MainTitleComponent text={props.Entry.title ? props.Entry.title : "Indefinido"}></MainTitleComponent>
            <div className="pl-4 sm:pl-12">
                {
                    props.Entry.type === 'subject' ?
                        arrayCompare(props.Entry.list, []) ? 'Nenhum cadastro' : props.Entry.list.map((unit, i) =>
                            <ListUnit type="subject" text={unit.title} key={i} list={props.Entry.list} setList={props.Entry.setList}></ListUnit>
                        ) : 
                        arrayCompare(props.Entry.list, []) ? 'Nenhum cadastro' : props.Entry.list.map((unit, i) =>
                            <ListUnit type="teacher" text={unit.name} key={i} list={props.Entry.list} setList={props.Entry.setList}></ListUnit>
                        )
                }
            </div>
        </div>
    )
}
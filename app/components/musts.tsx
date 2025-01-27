import { SetterProps } from "@/types/types";
import WeekGrid from "./weekGrid";
import ParagraphComponent from "./paragraph";

export default function Musts(props: SetterProps){
    return (
        <div id={props.id} hidden>
            <ParagraphComponent content={explanation}></ParagraphComponent>
            <WeekGrid Entry={props.Entry} EntryTarget={props.EntryTarget} setEntryTargetSubject={props.setEntryTargetSubject} setEntryTargetTeacher={props.setEntryTargetTeacher} id={props.Entry.type+"MustsGrid"}></WeekGrid>
        </div>
    )
}

const explanation = "Para cadastrar uma obrigatoriedade de horário, basta clicar no dia e horário que quiser. Horários obrigatórios cadastrados aparecerão no cartão de informação, à esquerda, e em verde no calendário."
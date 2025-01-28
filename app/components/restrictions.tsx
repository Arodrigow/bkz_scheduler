import { SetterProps } from "@/types/types";
import ParagraphComponent from "./paragraph";
import WeekGrid from "./weekGrid";

export default function Restrictions(props: SetterProps) {
    return (
        <div id={props.id} hidden >
            <ParagraphComponent content={explanation}></ParagraphComponent>
            <WeekGrid Entry={props.Entry} EntryTarget={props.EntryTarget} setEntryTargetSubject={props.setEntryTargetSubject} setEntryTargetTeacher={props.setEntryTargetTeacher} id={props.Entry.type + "RestrictionsGrid"} gridType="restriction"></WeekGrid>

        </div>
    )
}
const explanation = "Para cadastrar uma restrição de horário, basta clicar no dia e horário que quiser. Horários restritos cadastrados aparecerão no cartão de informação, à esquerda, e em vermelho no calendário."
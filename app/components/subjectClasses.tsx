import { SetterProps } from "@/types/types";
import ParagraphComponent from "./paragraph";
import SubjectClassesSetter from "./subjectClassesSetter";

export default function SubjectClasses(props: SetterProps) {
    return (
        <div id={props.id} hidden>
            <ParagraphComponent content={explanation}></ParagraphComponent>
            <SubjectClassesSetter
                Entry={props.Entry}
                EntryTarget={props.EntryTarget}
                id={props.Entry.type + "SubjectClasses"}
                SubjectEntry={props.SubjectEntry}
                setEntryTargetTeacher={props.setEntryTargetTeacher}
                setEntryTargetSubject={props.setEntryTargetSubject}
            ></SubjectClassesSetter>
        </div>
    )
}
const explanation = "Cadastre todas as turmas relacionadas à cada matéria."
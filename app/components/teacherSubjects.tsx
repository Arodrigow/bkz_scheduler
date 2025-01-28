import { SetterProps } from "@/types/types";
import ParagraphComponent from "./paragraph";
import TeacherSubjectSetter from "./teacherSubjectSetter";

export default function TeacherSubjects(props: SetterProps){
    return (
        <div id={props.id} hidden>
             <ParagraphComponent content={explanation}></ParagraphComponent>
             <TeacherSubjectSetter Entry={props.Entry} SubjectEntry={props.SubjectEntry} EntryTarget={props.EntryTarget} setEntryTargetSubject={props.setEntryTargetSubject} setEntryTargetTeacher={props.setEntryTargetTeacher} id={props.Entry.type+"TeacherSubjects"} ></TeacherSubjectSetter>
        </div>
    )
}

const explanation = "Escolha da lista os matérias que o professor selecionado leciona."
import { InfoSetProps, subjectObject, teacherObject } from "@/types/types";
import arrayCompare from "../utils/arrayCompare";

export default function Info(props: InfoSetProps) {

    const handleSelect = () => {
        const value = (document.getElementById(props.Entry.type + "Select") as HTMLInputElement).value;

        if (props.Entry.type === 'subject' && props.setEntryTargetSubject) {
            const index = (props.Entry.list as subjectObject[]).findIndex((i) => i.title === value);
            console.log(index);
            console.log(props.Entry.list)
            props.setEntryTargetSubject(props.Entry.list[index] as subjectObject)
            console.log((props.EntryTarget as subjectObject).title)
        }

        if (props.Entry.type === 'teacher' && props.setEntryTargetTeacher) {
            const index = (props.Entry.list as teacherObject[]).findIndex((i) => i.name === value);
            props.setEntryTargetTeacher(props.Entry.list[index] as teacherObject)
            console.log((props.EntryTarget as teacherObject).name)
        }
    }

    return (
        <form className="flex flex-col justify-center items-center gap-4 w-full sm:w-1/2">
            <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <label htmlFor={props.Entry.type + 'Input'}>{props.Entry.type === 'subject' ? 'Matéria: ' : 'Professor: '}</label>
                <select onChange={handleSelect} value={props.Entry.type === 'subject' ? (props.EntryTarget as subjectObject).title : (props.EntryTarget as teacherObject).name} name={props.Entry.type + "Select"} id={props.Entry.type + "Select"} className="outline outline-school rounded-xl p-2">
                    {
                        props.Entry.type === 'subject' ?
                            arrayCompare(props.Entry.list, []) ? 'Nenhum cadastro' : props.Entry.list.map((unit, i) =>
                                <option value={unit.title} key={props.Entry.type + "Options" + i}>{unit.title}</option>
                            ) :
                            arrayCompare(props.Entry.list, []) ? 'Nenhum cadastro' : props.Entry.list.map((unit, i) =>
                                <option value={unit.name} key={props.Entry.type + "Options" + i}>{unit.name}</option>
                            )
                    }
                </select>
            </div>
            <div>
                <div>
                    <div>
                        <span>
                            {
                                props.Entry.type === 'subject' ? 'Disciplina: '
                                    : 'Professor: '
                            }
                        </span>
                        <span>
                            {
                                props.Entry.type === 'subject' ? (props.EntryTarget as subjectObject).title
                                    : (props.EntryTarget as teacherObject).name
                            }
                        </span>
                    </div>
                    <div>
                        <span>
                            {
                                props.Entry.type === 'subject' ? 'Carga horária: '
                                    : 'Disciplinas: '
                            }
                        </span>
                        <span>
                            {
                                props.Entry.type === 'subject' ? (props.EntryTarget as subjectObject).workLoad
                                    : arrayCompare((props.EntryTarget as teacherObject).subjects, []) ? 'Nenhum cadastro' :
                                        (props.EntryTarget as teacherObject).subjects.map((subs, i) =>
                                            <span key={"TeacherSubjects"+i}>{subs.title}</span>
                                        )
                            }
                        </span>
                    </div>
                    <div>
                        <span>Horários obrigatórios: </span>
                        {
                            arrayCompare(props.EntryTarget.musts, []) ? 'Nenhuma obrigatoriedade' :
                                props.EntryTarget.musts.map((must, i) =>
                                    <span key={props.Entry.type+"Musts"+i}>{"Dia: " + must.dayOfWeek + " - " + must.hour + "º horário"}</span>
                                )
                        }
                    </div>
                    <div>
                        <span>Restrição de horários: </span>
                        {
                            arrayCompare(props.EntryTarget.restrictions, []) ? 'Nenhuma restrição' :
                                props.EntryTarget.restrictions.map((restriction, i) =>
                                    <span key={props.Entry.type+"Musts"+i}>{"Dia: " + restriction.dayOfWeek + " - " + restriction.hour + "º horário"}</span>
                                )
                        }
                    </div>
                </div>
            </div>
        </form>
    )
}